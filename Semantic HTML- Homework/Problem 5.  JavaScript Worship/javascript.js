function drawTheThing()
{
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var image = document.getElementsByTagName("img")[0];
    c.style.border = "2px dotted red";
    
    ctx.font = "20px Verdana";
    ctx.fillText("I love JavaScript",6,37);
    
    ctx.fillStyle = "#F8DF52";
    
    ctx.drawImage(image,37,60);
    
}