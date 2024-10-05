var li = document.querySelectorAll(".coolL li")
for(var i = 0;i<li.length;i++){
    li[i].addEventListener("click", myScript);
}

function myScript(e){
    if (e.target.attributes.id.value == 1){
        
    }
}
console.log(li)
alert(e.target.attributes.id.value);