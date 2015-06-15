var time = 1500;
var cycle = "long";
var tracker = 0;
var paused = false;

//Timer countdown function
function countdown(){
    if (!paused) {

        var seconds = ("00" + (time % 60)).slice(-2);
        
        $("#time").text(Math.floor(time/60) + ":" + seconds);
        $("title").text(Math.floor(time/60) + ":" + seconds);

        if (time > 0){
        time--;
        setTimeout(countdown, 1000);
        //Once the time is up, determine cycle, play chime and reset timer.
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
    } else {
        setTimeout(countdown, 1);
    } 
}

setTimeout(countdown(), 1000);

//Pause/Resume button appearance and interaction
$("#center").mousedown(function(){
    $(this).css({ "box-shadow" : "none", "transition" : "text-shadow 0.1s ease-out", "text-shadow" : "none", "transform" : "translate(2px, 2px)"});
})
$("#center").mouseup(function(){
    $(this).css({ "box-shadow" : "1px 1px 10px #aaa", "text-shadow" : "-1px -1px 15px #aaa", "transform" : "translate(-2px, -2px)"});
})
$("#center").mouseleave(function(){
    $(this).css({ "box-shadow" : "1px 1px 10px #000", "transition" : "none", "text-shadow" : "none"});
})
$("#center").mouseover(function(){
    $(this).css({ "box-shadow" : "1px 1px 10px #aaa", "transition" : "none", "text-shadow" : "-1px -1px 15px #aaa"});
})

$("#center").click(function(){
    if (!paused) {
        paused = true;
        $("#time").text("PAUSED");
    } else {
        paused = false;
    }
})
