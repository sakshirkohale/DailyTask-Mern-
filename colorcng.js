const randomcolor=()=>{
    let hex='0123456789ABCDEF';
    let color='#'

    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalid;
 if(!intervalid)
    {
let cngcolor=()=>{
   intervalid= setInterval(()=>{
   
         document.body.style.backgroundColor=randomcolor()
    },1000)
}
   
}
let stopcolor=()=>{
      
       clearInterval(intervalid);
       intervalid=null;
}
document.querySelector("#start").addEventListener("click",cngcolor)
document.querySelector("#stop").addEventListener("click",stopcolor)
