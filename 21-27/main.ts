//***************21 - 22***************
int vivo = 4;
let _age: number = 23;
let _day: string;
let _dta = "mary";
let _sdt; 

let vector: number [] = [1, 4, 2];
vector.push (33);
for (let element of vector)
  console.log (item);
//***************22********************
//normal array
let vector: number [] = [1, 4, 2];
vector.push (33);
for (let element of vector)
  console.log (item);
//generic array
let vector: Array <number> = [1, 4, 2];
vector.push (33);
for (let element of vector)
  console.log (item);
//enum
enum Operation {Addition,Subtraction,Multiplication,Division};//
current let: Operation = Operation.Multiplication;//define a variable and store one of those four values
switch(current){
    case Operation.Addition:{
        console.log('Sum');
        break;
    }
    case Operation.Subtraction:{
        console.log('sub');
        break;
    }
    case Operation.Multiplication:{
        console.log('Multi');
        break;
    }
    case Operation.Division:{
        console.log('Divi');
        break;
    }
//methods
grater(value1: number,value2: number): number{
    if(value1 > value2)
        return value1;
    else
        return value2;
}
export class AppComponent {
    constructor(){
        this.showMesage('Hello world');
    }
    showMessage(message: string): void{
        alert(message);
    }
}

//***************23********************
class Person{
    _name: string;
    _age: number;
    constructor(name: string,age: number){
        this._name = name;
        this._age = age; 
    }
    print(){
        console.log(`Name: ${this.name} and age: ${this.age}`);
    }
}
let person1: Person;
person1 = new Person('John',45);
person1.print();

//definition and initialization of properties in the constructor parameters
class Persona{
    constructor(public name: string,public age: number){}
    print(){
        console.log(`Name: ${this.name} and age: ${this.age}`);
    }
}
let person1: Person;
person1 = new Person('John',45);
person1.print();
//readonly modifier
//the property value can only be loaded in the constructor or when defining it and then it cannot be modified either from a method of the class or outside the class.
class Article{
    readonly code: number;
    description: string;
    price: number;
    constructor(code: number,description: string,price: number){
        this.code = code;
        this.description = description;
        this.price = price;
    }
    print(){
        this.code = 7 //error
        console.log(`Code ${this.code} Description: ${this.description} Price ${this.price}`);
    }
}
let article1: Article;
article1 = new Article(1,'Potatoes',12.5);
article1.print();
//***************24********************

//anonymous functions
const funcSumar = function(value1: number, value2: number): number{
    return value1 + value2;
}
console.log(funcSumar(4,9));
//optional parameters
function add(value1: number,value2: number,value3: number): number{
    if(value3)
        return value1 + value2 + value3;
    else 
        return value1 + value2
}
console.log(add(5,4));
console.log(add(5,4,3));
//Rest Parameters
//The Rest parameter concept is achieved by preceding the parameter name with three dots:
  //puede tener otros parámetros pero se deben declarar antes
function add (... values: number []) { 
    let sum = 0; 
    for (let x = 0; x <values.length; x ++) 
      sum + = values ​​[x]; 
    return sum; 
  } 
  console.log (add (10, 2, 44, 3)); 
  console.log (sum (1, 2)); 
  console.log (sum ());
  //Operador Spread
  //contrario a rest

  function add(value1: number,value2: number,value3: number){
      return valor1 + valor2 + valor 3;
  }
  const vec: number[] = [10,20,30];
  const s = sumar(...vec);
  console.log(s);
//parametros tipo union
// alamcenar mas de un tipo de dato
let edad: number | string;
edad=34;
console.log(edad);
edad='20 años';
console.log(edad);

function sumar(valor1: number | string, valor2: number | string ): number | string  {
    if (typeof valor1 ==='number' && typeof valor2 ==='number')
      return valor1+valor2;
    else 
      return valor1.toString() + valor2.toString();
  }
  
  console.log(sumar(4, 5));
  console.log(sumar('Hola ', 2));
  console.log(sumar('Hola ', 'Mundo'));
//funciones callback
function operar(valor1: number, valor2: number, func: (x: number, y:number)=>number): number {
    return func(valor1, valor2);
  }
  
  console.log(operar(3, 7, (x: number,y: number): number => {
    return x+y;
  }))
  
  console.log(operar(3, 7, (x: number,y: number): number => {
    return x-y;
  }))
  
  console.log(operar(3, 7, (x: number,y: number): number => {
    return x*y;
  }))
  type Operacion=(x: number, y:number)=>number;
//
  function operar(valor1: number, valor2: number, func: Operacion): number {
    return func(valor1, valor2);
  }
  
  console.log(operar(3, 7, (x: number,y: number): number => {  return x+y;  }))
  
  console.log(operar(3, 7, (x: number,y: number): number => {  return x-y;  }))
  
  console.log(operar(3, 7, (x: number,y: number): number => {  return x*y;  }))