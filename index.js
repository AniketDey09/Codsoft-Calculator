let output = document.getElementById("output");

function display(num){
    output.value += num;
}
function calculate(){
    try{
        output.value = eval(output.value);
   }
   catch{
     alert("invalid");
   }
}
function Clear(){
    output.value= "";
}
function del(){
    output.value = output.value.slice(0,-1);
}
