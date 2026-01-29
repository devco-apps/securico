
import { locations } from '../app/(pages)/locations/locationData';

console.log('Validating location data...');

let errors = 0;

locations.forEach((loc, index) => {
  if (!loc.name) {
    console.error(`Error: Location at index ${index} missing name`);
    errors++;
  }
  if (typeof loc.lat !== 'number' || isNaN(loc.lat) || loc.lat < -90 || loc.lat > 90) {
    console.error(`Error: Invalid latitude for ${loc.name}: ${loc.lat}`);
    errors++;
  }
  if (typeof loc.lng !== 'number' || isNaN(loc.lng) || loc.lng < -180 || loc.lng > 180) {
    console.error(`Error: Invalid longitude for ${loc.name}: ${loc.lng}`);
    errors++;
  }
  if (!loc.googleMapsLink || !loc.googleMapsLink.startsWith('http')) {
    console.error(`Error: Invalid Google Maps link for ${loc.name}`);
    errors++;
  }
  console.log(`Verified ${loc.name}: ${loc.city} (${loc.lat}, ${loc.lng})`);
});

if (errors === 0) {
  console.log('All locations validated successfully!');
  process.exit(0);
} else {
  console.error(`Found ${errors} errors in location data.`);
  process.exit(1);
}
