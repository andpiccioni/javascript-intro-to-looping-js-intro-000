
function forLoop(array){
  for (let i = 1; i < 25; i++) {
    array[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
  }
  return array
}

function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
}

function doWhileLoop(array){
  do{
    array.pop()
  } while (array.length > 0 && doWhileLoop())
}
