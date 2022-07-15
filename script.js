var headerlist = document.querySelector(".menu_list");
var menucontent = document.querySelector(".menu_content");

headerlist.addEventListener("click", open);
var x=1;
function open(){
    if(x%2 == 0){
        menucontent.style.display="block";
    }
    else{
        menucontent.style.display="none";
    }
    x++;
}


var countdown = new Date("July 25, 2022 00:00:00").getTime();
var x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = countdown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);