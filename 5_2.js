let x=56;
// let x='Строка';
// let x=true;
// let x;
switch (typeof x){
  case ('number'): console.log('Число'); break;
  case ('string'): console.log('Строка'); break;
  case ('boolean'): console.log('Булевое значение'); break;
  default: console.log('Тип x не определён');
}
