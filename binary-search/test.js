function binarySearch( sortedCollection, targetValue ) {

  var lowerBound = 0;
  var upperBound = sortedCollection.length - 1;
  var currentIndex = Math.floor( ( upperBound + lowerBound ) / 2 );
  console.log(`TARGET: ${ targetValue }, CURRENT INDEX ${ currentIndex }`);

  while( sortedCollection[ currentIndex ] != targetValue && lowerBound < upperBound ) {

    // adjust search area
    if ( targetValue < sortedCollection[ currentIndex ] ) {

      upperBound = currentIndex - 1;

    }

    else if ( targetValue > sortedCollection[ currentIndex ] ) {

      lowerBound = currentIndex + 1;

    }

    // recalculate currentIndex
    currentIndex = Math.floor( ( upperBound + lowerBound ) / 2 );
  }

  // make sure it's the right targetValue
  return ( sortedCollection[ currentIndex ] == targetValue ) ? currentIndex : false;
}

console.log( `Current index is ${ binarySearch( [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14], 8) } `);
