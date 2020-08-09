function openModal(x){
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = x;    
}

function onClosedImagModal(){
    document.getElementById("modal").style.display = "none";
}

function changeFontSize(x){
    var paragraph = document.getElementById("paragraph");
    var currFontSize = window.getComputedStyle(paragraph).fontSize;
    currFontSize = parseInt(currFontSize.slice(0,2));
    if(x == "inc"){
        currFontSize += 10;
    }
    else {
        currFontSize -= 10;
    }
    paragraph.style.fontSize = currFontSize+"px";
}