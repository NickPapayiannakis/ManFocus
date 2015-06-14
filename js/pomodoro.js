var time = 1500;
var cycle = "long";
var tracker = 0;

//Timer countdown function
function countdown(){
    var seconds = ("00" + (time % 60)).slice(-2);
    $("#time").text(Math.floor(time/60) + ":" + seconds);
    
    if (time > 0){
    time--;
    setTimeout(countdown, 1000);
    } else {
        document.getElementById("bell").play();
        tracker++;
        if (tracker == 7) {
            cycle = "long";
            time = 1500;
            setTimeout(countdown, 1000);
        } else if (tracker == 8) {
            time = 1500;
            setTimeout(countdown, 1000);
            tracker = 0;
        } else if (cycle == "short" && tracker < 7) {
            cycle = "long";
            time = 1500;
            setTimeout(countdown, 1000);
        } else if (cycle == "long" && tracker < 7) {
            cycle = "short";
            time = 300;
            setTimeout(countdown, 1000);
        }
    }    
}
