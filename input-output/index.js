(function(){
    var a=b=3;
})()

console.log("a defined?"+ (typeof a!==`undefined`)); //false
console.log("b defined?"+ (typeof b!==`undefined`)) //true


//question 2

var myObject={
    foo:"bar",
    func:function(){
        var self=this;
        console.log("outer func: this1.foo = " + this.foo);
 console.log("outer func: self1.foo = " + self.foo);

 (function(){
    console.log("inner func: this2.foo = " + this.foo);
 console.log("inner func: self2.foo = " + self.foo);
 })()
    }
}

myObject.func()

//question 3

console.log(0.1+0.2)
console.log(0.1 + 0.2 == 0.3)

//question 3

for(let i=0;i<5;i++){
    let btn=document.createElement(`button`);
    btn.appendChild(document.createTextNode(`Button `+i))
    btn.addEventListener(`click`,function(){
        console.log(i);
    })
    document.body.appendChild(btn)
}

//question 4
let arr1="john".split(``);
let arr2=arr1.reverse()
let arr3="jones".split(``)

arr2.push(arr3)

console.log("array 1: length"+ arr1.length + "last"+ arr1.slice(-1));
console.log("array 2: length="+ arr2.length+ "last="+arr2.slice(-1));

//question 4
console.log(1+"2"+"2");
console.log(1+ + "2"+"3");
console.log(1+ -"1"+"2");
console.log(+"1"+"1"+"2");
console.log("A"-"B"+"2");
console.log("A"-"B"+2);

//question 5
console.log(false == `0`);
console.log(false === `0`);