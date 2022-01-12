/**
 * @param a  Postiva nummer
 * @param b  Namn
 *
 */
export function fun1(a: number, b: string) {}
/**
 *
 * @param a text
 * @param b  text också men behövs inte
 *
 */
type btype = '3' | '7' | '8';
export function fun2(a: btype, b?: btype) {}

export function func3(data: number) {
  if (data > 3) {
    console.log('större än tre');
  } else {
    console.log('mindre än tre');
  }
}


export function funloop(){
let cars=['3','3','4', '5' ]
console.log(cars.length)
  for (let i = 0; i < cars.length; i++) {
    cars[i]
  }
}