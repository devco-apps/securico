import { getFaqs } from '../services/faqService';

async function testGetFaqs() {
  console.log('Testing getFaqs()...');
  try {
    const faqs = await getFaqs();
    if (faqs.length > 0) {
      console.log('✅ Success: Fetched ' + faqs.length + ' FAQs');
      console.log('Sample FAQ:', faqs[0]);
      
      const electronics = faqs.filter(f => f.category === 'Electronics').length;
      const guarding = faqs.filter(f => f.category === 'Guarding').length;
      const general = faqs.filter(f => f.category === 'General').length;
      
      console.log('Categorization Stats:');
      console.log(`- Electronics: ${electronics}`);
      console.log(`- Guarding: ${guarding}`);
      console.log(`- General: ${general}`);
    } else {
      console.error('❌ Failed: No FAQs fetched');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error fetching FAQs:', error);
    process.exit(1);
  }
}

testGetFaqs();
