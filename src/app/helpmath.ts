import {add, subtract, divide, multiply, rationalize, simplify, pow, pi, round, parse, evaluate} from 'mathjs';

/**
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export function addfun(a:number, b:number){

    return add(a, b)


}

export function subtractfun(a:number, b:number){

    return subtract(a, b)


}

export function areaTriangle(b:number, h:number){

    return divide(multiply(b, h), 2)



}

/**
 * 
 * @param r  radie av en cirkel
 * @returns 
 */
export function areaCircle(r:number, rounddata:number){
    

return multiply(pow(r,2), pi)
   



}



export function areaRectangle(b:number, h:number){




}


export function circumferenceCircle(r:number){
    
}

export function roundData(data, n){

    return round(data, n)
}