//Synchronous:

console.log("taks1");
console.log("task2")
console.log("task3")

//Async

console.log("task1");
console.log("task2");


setTimeout(()=>{
    console.log("task3");
},2000);

console.log("task4");


//Callback

a=10;
b=20;
function sum(a,b){
    console.log(a+b)
}

setTimeout(sum,3000,a,b)


function sum1(a,b)
{
    console.log(a+b)
}

function cal(a,b,sumcall){
    sumcall(a,b)  //we can use any function name
}

cal(30,20,sum1)


//Callbackhell

function getdata(dataid,datanext)
{
    setTimeout(()=>{
         console.log(dataid);
    if(datanext)
    {
        datanext();
    }

    },2000)

}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{   
        })                 // this is callback hell
    })
})


function  changetext(){
    document.querySelector('h1').innerHTML="welcome to js"
}

const chngme=setTimeout(changetext,5000);
document.querySelector('#btn1').addEventListener("click",()=>{
    clearTimeout(chngme);
    console.log("stopped")
})


document.querySelector('#btn').addEventListener("click",()=>{
    changetext()
})


