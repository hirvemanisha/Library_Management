const addUserBtn=document.getElementById('addUser');
const usernameTextField=document.getElementById('username')
const recordsDisplay=document.getElementById('records')

let userArray=[];
let edit_id=null;

let objStr=localStorage.getItem('user');
if(objStr!=null){
    userArray=JSON.parse(objStr)

}

DisplayInfo()
addUserBtn.addEventListener('click',function(){
    const name =usernameTextField.value;
    // console.log(name)
    userArray.push({'name':name});
// console.log(userArray)
saveInfo(userArray)
usernameTextField.value='';
DisplayInfo()
})

function saveInfo(userArray){
   let str= JSON.stringify(userArray)
    localStorage.setItem('user',str)

}

function DisplayInfo(){
    let statement='';
    userArray.forEach((user,i)=>{
        statement+=` <tr>
        <th scope="row">${i+1}</th>
        <td>${user.name}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i+1})'></i>
        <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i+1})'> </i>
        </td>
        
      </tr>`;
    })
    recordsDisplay.innerHTML=statement;



}

function EditInfo(id){
//   alert(id)
edit_id=id;
usernameTextField.value=userArray[id].name;


}
function DeleteInfo(id){
    // alert(id);
    userArray.splice(id,1);
    saveInfo(userArray);
    DisplayInfo();
   

}