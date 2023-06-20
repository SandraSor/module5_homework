let age = prompt('Введите значение');

if ((typeof (+age) === 'number') && (!isNaN(+age))){
  console.log(+age,(+age)%2 === 0?'четное':'нечетное');
}else{
  console.log('Упс, кажется, вы ошиблись');
 }
