var icons = document.querySelector(".fa-paper-plane");
var inputs = document.querySelector("input");
var messege_wrap = document.querySelector(".messege_wrap")
function myFunction(){
    if(!inputs.value){
        function noValueFunc(){
            alert("Please input Something your input field is empty")
        }
        noValueFunc()
    }else{
        const messegeDiv = document.createElement("div")
        const textMessege = document.createTextNode(`${inputs.value}`)
        messegeDiv.appendChild(textMessege)
        messegeDiv.classList.add("messege_div_class")
        messege_wrap.insertBefore(messegeDiv, messege_wrap.childNodes[1])
    }
    inputs.value = ""
}
    inputs.addEventListener("keypress", function(keyy){
        if(keyy.keyCode == 13){
            const messegeDiv = document.createElement("div")
            const textMessege = document.createTextNode(`${inputs.value}`)
            messegeDiv.appendChild(textMessege)
            messegeDiv.classList.add("messege_div_class")
            messege_wrap.insertBefore(messegeDiv, messege_wrap.childNodes[1])
        }
    })

icons.addEventListener("click", myFunction)