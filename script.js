// // function userId(){
// //     let displaymessage=document.getElementById('displayText')
// //     let input=document.getElementById('userId').value
// //     if(input===''){
// //         displaymessage.textContent='Please enter Valid Email Id'
// //         displaymessage.style.color='white'
// //         displaymessage.style.padding='5px'
// //         displaymessage.style.marginLeft='30px'
// //         displaymessage.style.fontSize='17px'
// //     }else{
// //         displaymessage.textContent=""
// //     }
// // }
// // function pass(){
// //     let displayText1=document.getElementById('displayText1')
// //     let passInput= document.getElementById('password').value
// //     if (passInput===''){
// //         displayText1.textContent='Please Enter the Valid Password'
// //         displayText1.style.color='white'
// //         displayText1.style.marginLeft='10px'
// //         displayText1.style.padding='5px'
// //         displayText1.style.fontSize='17px'
// //     }else{
// //         displayText1.textContent=""
// //     }
    
// // }


// // let button1=document.getElementsByClassName('btn1')[0]
// // button1.addEventListener('click',function(){
// //     userId()
// //     pass()
// // });


// let btn = document.getElementById('btn-1');
//     let inputPass = document.getElementById('password');
//     let inputId = document.getElementById('userId');
//     let displaymessage = document.getElementById('displayText');
//     let displayText1 = document.getElementById('displayText1');

//     function userId() {
//       let input = inputId.value;
//       if (input === '') {
//         displaymessage.textContent = 'Please enter Valid Email Id';
//       } else {
//         displaymessage.textContent = '';
//       }
//     }

//     function pass() {
//       let passInput = inputPass.value;
//       if (passInput === '') {
//         displayText1.textContent = 'Please Enter the Valid Password';
//       } else {
//         displayText1.textContent = '';
//       }
//     }

//     function login() {
//       window.location.href = "./welcome.html";
//     }

//     let button1 = document.getElementsByClassName('btn1')[0];
//     button1.addEventListener('click', function () {
//       userId();
//       pass();
      
//       if (inputId.value === '' || inputPass.value === '') {
//         displaymessage.textContent = 'Please enter valid data';
//         displayText1.textContent = 'Please enter valid data';
//       } else {
//         displaymessage.textContent = '';
//         displayText1.textContent = '';
//         login();
//       }
//     });



document.getElementById('loginBtn').addEventListener('click', function () {
    // Get input values
    let userIdInput = document.getElementById('userId').value;
    let passwordInput = document.getElementById('password').value;

    // Get the error message element
    let errorMessage = document.getElementById('errorMessage');

    // Check if inputs are empty
    if (userIdInput === '' || passwordInput === '') {
      errorMessage.textContent = 'Please enter valid data';
    } else {
      // Clear any previous error messages
      errorMessage.textContent = '';

      // Validate email (you can add more sophisticated validation if needed)
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userIdInput)) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
      }

      // You can add more password validation if needed
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
      if (!passwordRegex.test(passwordInput)) {
        errorMessage.textContent = 'Password must have at least 8 characters, including one uppercase letter,lowercase letter, one number, and one special character.';
        return;
      }

      // If everything is valid, redirect to the next page
      window.location.href = "./welcom.html";
    }
  });
