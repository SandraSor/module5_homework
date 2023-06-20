let odd=0;
let even=0;
let nul=0;
let arr=[0,1,2,4,2,0,'null',3,0,'=',undefined];
arr.forEach(item=>{
  if ((typeof (+item) === 'number') && (!isNaN(+item))){
    +item%2 === 0? +item ===0 ?nul++ :even++ :odd++;
  }
})
console.log('even',even, 'odd', odd, 'null', nul);
