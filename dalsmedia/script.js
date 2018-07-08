function startTimer() {
    var timer = document.getElementById("timer");
    var time = timer.innerHTML;
    var arr = time.split(":");
    var min = arr[0];
    var sec = arr[1];
    if (sec==0){
        if (min==0){
            alert("Time is out");
            return;
        }
        min--;
        sec = 59;
    }
    else sec--;
    if (sec<10) sec = "0"+sec;
    document.getElementById("timer").innerHTML = min+":"+sec;
    setTimeout(startTimer, 1000);
};

function button() {
    document.getElementsByClassName('circle')[0].style.transform='rotate('+(Math.random()*50)+'rad)';
    return false;
};