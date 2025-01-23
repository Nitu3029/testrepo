
function regsistration(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         console.log('API CALL registration sucecssfully'); 
         resolve('promise resolved')
     },2000)
    })
 }
 
 function sendEmail(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log('API CALL Send Email sucecssfully')  
             resolve()
         },2000)
        })
 }
 function login(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log('API CALL  Login sucecssfully')  
             resolve()
         },2000)
        })
 }
 function getdata(){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             console.log('API CALL getdata sucecssfully')  
             resolve()
         },2000)
        })
 }
 
 regsistration().then(sendEmail()).then(login()).then(getdata())
 console.log('other work');