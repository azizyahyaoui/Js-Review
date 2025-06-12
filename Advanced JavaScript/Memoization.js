//Memoization
// Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

const app = async (num) =>{
  console.log("Calculating...");
  const multiplyBy10 = memoizedMultiplyBy10();
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(20));
  console.log(multiplyBy10(10));
  console.log(multiplyBy10(30));
  console.log(multiplyBy10(20));
  console.log(multiplyBy10(30));
}


const multiplyBy10 = (num) => {
  return num * 10;
}


const memoizedMultiplyBy10 = ()=>{
  const cache = {};

  return (num) => {
    if (num in cache) {
      console.log(cache)
      return cache[num];
    } 
    const result = num * 10;
      cache[num] = result;
      return result;
    
  }
}


app();