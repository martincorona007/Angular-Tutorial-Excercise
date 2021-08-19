//***************21 - 22***************
let vector: number [] = [1, 4, 2];
vector.push (33);
for (let element of vector)
  console.log (item);
//***************23********************
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
}