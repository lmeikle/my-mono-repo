import apple from 'apple';
import calculateDistance from '@lmeikle/calculate-distance-util';

/**
 * https://mynasadata.larc.nasa.gov/latitudelongitude-finder/
 * My home: 51.536377, -0.137653
 * Buckingham Palace: 51.501364, -0.14189

 * https://www.movable-type.co.uk/scripts/latlong.html
 * Distance: 3.904 km
 */
const data = {
  startLatitude: 51.536377,
  startLongitude: -0.137653,
  endLatitude: 51.501364,
  endLongitude: -0.14189,
  expectedResult: 3.904
};

const distance = calculateDistance(data.startLatitude, data.startLongitude, data.endLatitude, data.endLongitude);
console.log('distance: ', distance);

console.log('apple: ', apple);
