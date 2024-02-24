let form=document.getElementById('form')
let main=document.querySelector('.main')
// console.log(form)
form.addEventListener('submit',function(event){
    // console.log(event)
    let name=event.target.uname.value;
    let email=event.target.email.value;
    let Contact=event.target.phone.value;

    let checkStatus=0;

    let userData=JSON.parse(localStorage.getItem('userDetails'))?? [];
    for (let v of userData){
        if (v.email==email || v.Contact===Contact){
            checkStatus=1;
            break
        }
    }
if (checkStatus==1){
    alert('Email or Phone Already Exist')
}else{
     // let userData=JSON.parse(localStorage.getItem('userDetails'))?? [];  //null handel operator>>>Agar userData me koi data pada he to use lelo nahi to ?? empy arreay return kardo []----naya data push karne ke lia empy aaray create karna padenga to store multiple data into 1 aaray[{},{}]
     userData.push({                                                                                //^
        'name':name,                                                                               //^
        'email':email,            //blanck aarey []ke andar ye 3  object {} jake data push honga>>>>>>
        'Contact':Contact
    });

    localStorage.setItem('userDetails',JSON.stringify(userData));
    event.target.reset();
}
displayData();
    // console.log(name,email,Contact)
    event.preventDefault();
})
let displayData=function(){
   let userData=JSON.parse(localStorage.getItem('userDetails'))?? [];
  let finalData='';
  userData.forEach(function(element,i){

    console.log(element)
    finalData+=`<div class="items">
            <span onclick='removedData(${i})'>&times;</span>         

            <h5>Name</h5>
            <div>${element.name}</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Contact</h5>
            <div>${element.Contact}</div>
        </div>`
    
  });

  main.innerHTML=finalData;

};

let removedData=(index)=>{
    let userData=JSON.parse(localStorage.getItem('userDetails'))?? [];
    userData.splice(index,1);

    localStorage.setItem('userDetails',JSON.stringify(userData));

    displayData();
}


displayData();



