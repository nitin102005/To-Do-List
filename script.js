const inputtask=document.getElementById("input-task")
const taskscontainer=document.getElementById("taskscontainer");

function addtask(){
    if(inputtask.value===''){
        alert("You Must Add some Task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputtask.value;
        taskscontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputtask.value='';
    savedata();
}
taskscontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }

},false);
function savedata(){
    localStorage.setItem("data",taskscontainer.innerHTML);
}
function showtasks(){
    taskscontainer.innerHTML=localStorage.getItem("data");
}
showtasks();
