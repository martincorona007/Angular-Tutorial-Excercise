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

