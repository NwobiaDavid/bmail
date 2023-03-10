alert("loaded");

function myFunc() {
    let input= document.getElementById('input'),
    filter= input.value.toLowerCase(),
    address= document.getElementsByClassName("address"),
    body= document.getElementsByClassName("body");

    for(let i= 0; i<address.length; i++){
        let x= address[i].textContent;
        let y= body[i].textContent;
        let xy= x+y;
        if(xy.toLowerCase().indexOf(filter)> -1){
            address[i].style.display= "";
            body[i].style.display="";
        }else{
            address[i].style.display= "none";
            body[i].style.display= "none";
        }
    }
}

myFunc();
