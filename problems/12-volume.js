/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

const recVolume = height => {
  let res = [];
  res.push(height)
  const sumThree = (otherNum) => {

  if(res.length < 3){
    res.push(otherNum);
  }

  if(res.length === 3) {

    return res.reduce((a, b) => a * b)
  }
  return sumThree
  }
  return sumThree;
}

// let tri = recVolume(12);
// tri(8);
// let total = tri(20);
// console.log(total);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
