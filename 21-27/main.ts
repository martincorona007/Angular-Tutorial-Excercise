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
//***************25********************
class Persona{
    protected nombre: string;
    protected edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(` Nombre ${this.nombre}`);
        console.log(` Edad ${this.edad}`);
    }
    
}
class Empleeado extends Persona{
    private sueldo: number;
    constructor(nombre: string, edad:number,sueldo: number){
        super(nombre,edad);
        this.sueldo = sueldo;
    }
    pagaImpuestos(){
        if(this.sueldo > 5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
            console.log(`${this.nombre} no debe pagar impuestos`);
    }
}
const personal =  new Persona('Juan',44);
personal.imprimir();
const empleado1 = new Empleeado('Ana', 22,7000);
empleado1.imprimir();
empleado1.pagaImpuestos();
//***************26********************
interface Punto{
    imprimir(): void;
}
class PuntoPlano implements Punto{
    constructor(private x: number, private y: number){

    }
    imprimir(){
        console.log(`Punto en el plano (${this.x},${this.y})`);
    }
    
}
class PuntoEspacio implements Punto{
    constructor(private x: number, private y:number, private z:number){}
    imprimir(){
        console.log(`Punto en el espacio (${this.x}, ${this.y},${this.z})`);
    }
}
let puntoPlano1: PuntoPlano;
puntoPlano1 = new PuntoPlano(10,4);
puntoPlano1.imprimir();
let puntoEspacio1: PuntoEspacio;
puntoEspacio1 = new PuntoEspacio(20,50,60);
puntoEspacio1.imprimir();
//***************27********************
//TypeScript permite crear clases y funciones que administren distintos tipos de datos.
//clase tradicional
class PilaEnteros{
    private vec:number [] = [];
    insertar(x: number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length > 0)
            return this.vec.pop();
        else    
            return null;
    }
}
class PuelaStrings{
    private vec: string [] = [];
    insertar(x: string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length > 0 )
            return this.vec.pop();
        else
            return null;
    }
}
let pila1 = new PilaEnteros();
pila1.insertar(20);
pila1.insertar(43);
pila1.insertar(1);
console.log(pila1.extraer());

let pila2 = new PilaStrings();
pila2.insertar('juan');
pila2.insertar('ana');
pila2.insertar('luis');
console.log(pila2.extraer());
//clase generica
class PilaGenerica<T>{
    private vec:T[] = [];
    insertar(x: T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length > 0 )
            return this.vec.pop();
        else
            return null;
    }
}
let pila3: PilaGenerica<number>;
pila3 = new PilaGenerica<number>();
pila3.insertar(20);
pila3.insertar(42);
pila3.insertar(1);
console.log(pila3.extraer());

let pila4: PilaGenerica<string>;
pila4 = new PilaGenerica<string>();
pila4.insertar('juan');
pila4.insertar('ana');
pila4.insertar('luis');
console.log(pila4.extraer());
//program that create a stack of another class
class PilaGenerica <T>{
    private vec: T [] = [];
    insert(x: T){
        this.vec.push(x);
    }
    extract(){
        if(this.vec.length > 0)
            return this.vec.pop();
        else    
            return null;
    }
}
class Person{
    constructor(public name: string, public age: number){}
}
let stack5: PilaGenerica <Person>;
stack5 = new StackGenerica <Person>();
stack5.insert(new Person('pedro',33));
stack5.insert(new Person('maria',33));
stack5.insert(new Person('marcos',33));
console.log(stack5.extract());