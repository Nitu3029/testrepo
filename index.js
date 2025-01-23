//question:  

// create a  arrow function which accept one object with value name and email and print
//  name and email in the given function ?

let user={
    name:'saurav',
    email:'abc@gmail.com'
}

let printData=(user)=>{
   
    let {name,email}=user;
    console.log(`Name:${name} and Email : ${email}`)
}

printData(user)

// To execute your programe 
  
//node filename with exetnesion
//node indexe.js