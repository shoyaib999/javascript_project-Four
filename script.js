
function changeBG(color){
    document.body.style.backgroundColor = color;

    let text = document.getElementsByClassName("text");

    if(color == "#808080"){
        for(let elm of text){
            elm.style.color = "white";
        }
    }else{
        for(let elm of text){
            elm.style.color = "black";
        }
    }
}