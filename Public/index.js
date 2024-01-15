const user = document.getElementById("fN");
const userPassword = document.getElementById("sN");
const userConfirm = document.getElementById("lN");
const button = documen.getElementById("button");

button.adEventListener("submit",(event)=>{
    firstInput = userPassword.value;
    secondInput = userConfirm.valve;
    if(firstInput !== secondInput){
        button.type = "text";
    }else{
        button.type = "submit";
    }
})