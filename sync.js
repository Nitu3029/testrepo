// function holdTime(){
//     let ms=4000+new Date().getTime();
//     while(new Date<ms){}
// } 
function registration(){
    //holdTime();
    setTimeout(()=>{
        console.log('registration sucessfully')
    },2000)
    
}

function sendEmail(){
    //holdTime();
    setTimeout(()=>{
        console.log('send Email successfull')
    },4000)
    
}

function login(){
    //holdTime();
    setTimeout(()=>{
        console.log('login successfull')
    },1000)
}

function getdata(){
    //holdTime();
    setTimeout(()=>{
        console.log('getdata successfull')
    },3000)
}
registration();
sendEmail();
login();
getdata();

console.log('other work')