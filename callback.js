// function holdTime(){
//     let ms=4000+new Date().getTime();
//     while(new Date<ms){}
// } 
function registration(callback){
    //holdTime();
    setTimeout(()=>{
        console.log('registration sucessfully')
        callback();
    },2000)
    
}

function sendEmail(callback){
    //holdTime();
    setTimeout(()=>{
        console.log('send Email successfull')
        callback();
    },4000)
    
}

function login(callback){
    //holdTime();
    setTimeout(()=>{
        console.log('login successfull')
        callback();
    },1000)
    
}

function getdata(){
    //holdTime();
    setTimeout(()=>{
        console.log('getdata successfull')
    },3000)
}
// callback hell
registration(()=>{
    sendEmail(()=>{
        login(()=>{
            getdata();
        });
    });
});
console.log('other work');