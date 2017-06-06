let sortedCollection = Array(49999999).fill().map(( e , i ) => i + 1);

function binarySearch( sortedCollection, targetValue ) {

  var lowerBound = 0;
  var upperBound = sortedCollection.length - 1;
  var currentIndex = Math.floor( ( upperBound + lowerBound ) / 2 );

  while( sortedCollection[ currentIndex ] != targetValue && lowerBound < upperBound ) {
    if ( targetValue < sortedCollection[ currentIndex ] ) upperBound = currentIndex - 1;
    if ( targetValue > sortedCollection[ currentIndex ] ) lowerBound = currentIndex + 1;
    currentIndex = Math.floor( ( upperBound + lowerBound ) / 2 );
  }
  return sortedCollection[ currentIndex ] === targetValue ? currentIndex : false;
}

const a = new Date();
binarySearch( sortedCollection, 49999999);
const b = new Date();

console.log(`it took ${ a - b }ms to run binary search`);

function linearSearch( sortedCollection, targetValue ) {
  for ( i = 0; i <= sortedCollection.length; i++ ) {
    if ( i === targetValue ) {
      return i;
    }
  }
}

const c = new Date();
linearSearch( sortedCollection, 49999999 );
const d = new Date();

console.log(`it took ${ c - d }ms to run linear search`);
