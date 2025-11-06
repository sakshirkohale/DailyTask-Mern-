
//Promises
let promis=new Promise((resolve,reject)=>{

success=true;

if(success)
{
    resolve("task completed successfully..!")
}
else{
    reject("task is rejected");
}
});

promis
.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message)
})
.finally(()=>{
    console.log("Finished..!")
})

