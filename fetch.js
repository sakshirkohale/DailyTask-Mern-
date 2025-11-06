


async function getstring(){
    setTimeout(()=>{
        console.log("async awaits")
    },3000)
}

getstring();
//Fetch API

async function getdata(){
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let data=await response.json() //converting into json format
    console.log(data)
}
getdata();

