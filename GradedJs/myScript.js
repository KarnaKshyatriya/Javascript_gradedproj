
 let show=document.querySelector('.display');
 let temp=document.querySelector('.holdval');
 var btn1=document.getElementById('initial');
 var btn2=document.getElementById('update');

 btn1.addEventListener('click',addItem);
 btn2.addEventListener('click',process);
let todoArray = [];
localStorage.clear();

function addItem(){
    let newVal=document.getElementById('input').value;

    if(newVal.trim()!=='')
    {
        let hold=localStorage.getItem("toDo");
        if(hold===null)
        {
            todoArray=[];
        }
        else{
           todoArray=JSON.parse(hold);
        }
    
        todoArray.push(newVal.trim());
    
    localStorage.setItem("toDo",JSON.stringify(todoArray));
    displayList();
    }
    clearInputBox();
    
}
function deleteToDo(i){
    let pos=i;
    let arr=localStorage.getItem("toDo");
    todoArray=JSON.parse(arr);
    todoArray.splice(pos,1);
    localStorage.setItem("toDo",JSON.stringify(todoArray));
    displayList();

}
function clearInputBox(){
    let inputBox=document.getElementById('input');
    inputBox.value="";
}
function displayList()
{
  let populate=localStorage.getItem("toDo");
if(populate===null)
{
    todoArray=[];
}
else{
    todoArray=JSON.parse(populate);
}

let display='';
todoArray.forEach((list, index)=>{

display+=`<div class="griditem"><span id="textToDo"> ${list}</span></div>
<div class="griditem"><button onclick="editToDo(${index})" id="edit">edit</button></div>
<div class="griditem"><button onclick="deleteToDo(${index})" id="delete">delete</button></div>`;
    
});

show.innerHTML=display;

console.log(display);

	}

    function editToDo(index)
    {
        let arrayIndex=index;
        temp.value=index;
        let arr=localStorage.getItem("toDo");
        todoArray=JSON.parse(arr);
        let inputBox=document.getElementById('input');
        inputBox.value=todoArray[arrayIndex];

        //let btn2=document.getElementById('update');
       // let btn1=document.getElementById('initial');
        btn1.style.display='none';
        btn2.style.display='block';
        
    }
    function process(){

        let arr=localStorage.getItem("toDo");
        todoArray=JSON.parse(arr);
let position=temp.value;
       todoArray[position]=document.getElementById('input').value;
       localStorage.setItem("toDo",JSON.stringify(todoArray));

     //  let btn2=document.getElementById('update');
     //  let btn1=document.getElementById('initial');
       btn2.style.display='none';
       btn1.style.display='block';
       document.getElementById('input').value="";
       displayList();
    }
   
    
    function deleteToDo(i)
    {
        
        
        let arr=localStorage.getItem("toDo");
        todoArray=JSON.parse(arr);
        if(confirm("Are You Sure You Want To Delete  ??"))
        {
        todoArray.splice(i,1);
        localStorage.setItem("toDo",JSON.stringify(todoArray));
        console.log(todoArray.length);
        
        
        displayList();
        
        }
        else{}
        if(todoArray.length===0)
        {
            let setVal=`<span>Demo Text</span`;
            show.innerHTML=setVal;
        }

    }


    
