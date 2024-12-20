const helloName=(name1)=>{
 return "Hello, "+name1+"!";
}
console.log( helloName("Ivan"))
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(2,4));
function sum2(a,b){
    return a+b;
}
console.log(sum2(2,4));
const sumAll=(...arg)=>{
return arg.reduce((total,numb)=>total+numb);
}
console.log(sumAll(2,3,4,5))


const obj1={
   name:'',
   age:'',
    createPerson:(pname,page)=>{
        obj1.name = pname;
             obj1.age = page;
       return obj1;
    }
     }
     obj1.createPerson("Ivan",16)
     console.log(obj1)

const isEven=(num)=>{
    if(num%2===0)
        return true
    else return false;
}
console.log(isEven(3))
const doubleArray=(arr)=>{
return arr.map((number)=>number*2)
}
const arrnumber=[1,2,3,4,5,6];
console.log(doubleArray(arrnumber))

const filterEvenNumbers=(arr)=>{
    const arr2=[];
    for(let i=0;i<arr.length; i++){
        if(arr[i]%2===0)
            arr2.push(arr[i]);
    
    }
    return arr2;
}
console.log(filterEvenNumbers(arrnumber))
