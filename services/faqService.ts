import * as cheerio from 'cheerio';
import { FAQ } from '@/types/faq';

export async function getFaqs(): Promise<FAQ[]> {
  try {
    const response = await fetch('https://securico.co.zw/faqs/', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FAQs: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const faqs: FAQ[] = [];

    $('.elementskit-single-faq').each((i, el) => {
      const question = $(el).find('.elementskit-faq-title').text().trim();
      // Use html() to preserve formatting like <br/> tags
      const answer = $(el).find('.elementskit-faq-body').html()?.trim() || '';

      if (question && answer) {
        faqs.push({
          id: i + 1,
          quest: question,
          ans: answer,
          category: categorizeFAQ(question, answer),
        });
      }
    });

    return faqs;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

function categorizeFAQ(question: string, answer: string): "Electronics" | "Guarding" | "General" {
  const text = `${question} ${answer}`.toLowerCase();

  const electronicsKeywords = [
    'cctv', 'camera', 'alarm', 'electronic', 'access control', 'paradox', 'dahua', 'zkt',
    'fence', 'sensor', 'battery', 'transmitter', 'video', 'biometric', 'system', 'install',
    'app', 'mobile', 'remote', 'detect'
  ];

  const guardingKeywords = [
    'guard', 'officer', 'patrol', 'dog', 'canine', 'physical', 'manning', 'uniform',
    'personnel', 'deployment', 'reaction', 'vehicle'
  ];

  const elecCount = electronicsKeywords.filter(k => text.includes(k)).length;
  const guardCount = guardingKeywords.filter(k => text.includes(k)).length;

  if (elecCount > guardCount) return 'Electronics';
  if (guardCount > elecCount) return 'Guarding';

  // Tie-breaker or no matches: Try to guess based on context or default
  // For Securico, maybe check if it mentions specific brands
  if (text.includes('monitoring') || text.includes('response')) return 'Electronics'; // Usually associated with alarms

  return 'General';
}
