//Задание 1
// let age = prompt('Введите значение');

// if ((typeof (+age) === 'number') && (!isNaN(+age))){
//     console.log(+age,(+age)%2 === 0?'четное':'нечетное');
// }else{
//   console.log('Упс, кажется, вы ошиблись');
// }

//Задание 2
// let x=56;
// // let x='Строка';
// // let x=true;
// // let x;
// switch (typeof x){
//   case ('number'): console.log('Число'); break;
//   case ('string'): console.log('Строка'); break;
//   case ('boolean'): console.log('Булевое значение'); break;
//   default: console.log('Тип x не определён');
// }
  
//Задание 3
// let str='Hello';
// console.log(str.split('').reverse().join(''));

//Задание 4
// let num = Math.floor(Math.random() * 101);;
// console.log(num);

//Задание 5
// let arr=[0,1,2,4,2];
// console.log(arr.length);
// arr.forEach(item => console.log(item));

//Задание 6
// // let arr =['her', 'her2', 'her3'];
// let arr =['her', 'her', 'her'];
// let arrSet = new Set(arr);
// console.log(arrSet.size === 1);

//Задание 7
// let odd=0;
// let even=0;
// let nul=0;
// let arr=[0,1,2,4,2,0,'null',3,0,'=',undefined];
// arr.forEach(item=>{
//   if ((typeof (+item) === 'number') && (!isNaN(+item))){
//     +item%2 === 0? +item ===0 ?nul++ :even++ :odd++;
//   }
// })
// console.log('even',even, 'odd', odd, 'null', nul);

//Задание 8
// let map = new Map();
// map.set("1", "str1"); 
// map.set(1, "num1");     
// map.set(true, "bool1");
// map.forEach((value, key, map) => {
//   console.log(`Ключ — ${key}, значение — ${value}`);
// });