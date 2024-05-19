var istatus = document.querySelector("h5");
var add = document.querySelector("#Add");
var friend = 0;
add.addEventListener("click",function(){
    if(friend == 0){
        istatus.innerHTML ="Friends"
        add.innerHTML ="Remove"
        add.style.backgroundColor ="transparent"
        istatus.style.color = "green"
        friend = 1;
    }
    else{
        istatus.innerHTML ="Stragers"
        add.innerHTML ="Add friends"
        add.style.backgroundColor ="cadetblue"
        istatus.style.color = "red"
        friend = 0;
    }
   
})

