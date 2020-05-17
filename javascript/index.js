
/*const mike={
    name: 'Mike',
    job: 'teacher'
};*/

const Person= function(name, yearBirth, job){
    this.name= name;
    this.yearBirth= yearBirth;
    this.job= job;
    this.calculateAge= function(){
        return 2019-this.yearBirth;
    }
}

Person.prototype.calculateSum= function(num1, num2){
    return num1+num2;
}

const mike= new Person('Mike', 1975, 'teacher');
console.log(mike);
console.log(mike.calculateSum(5,9));
mike.calculateAge();



var john= {
    name: 'John',
    calculateAge: function(){
        console.log(this);
        const innerFunction= function(){
            console.log(this);
        }
        const innerFunction2= ()=>{
            console.log(this);
        }
        return {
            innerFunction,
            innerFunction2
        }
    }
}

const innerObject=  john.calculateAge();

console.log(innerObject.innerFunction());
console.log(innerObject.innerFunction2());

const a= 'Hello';

const b= first();
console.log(b());

function first(){
    const b= 'Hi';

    const second= function(){
        const c= 'Hey';
        console.log(b);
        return b;
    }

    return second;
}

