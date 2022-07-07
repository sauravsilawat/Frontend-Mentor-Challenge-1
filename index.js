let today = new Date()
let currentday = today.toLocaleString('en-us', { weekday: 'short' }).toLowerCase();
const bar = document.querySelectorAll(".bar");
const info = document.querySelectorAll(".info");

fetch("./data.json")
    .then(resp => resp.json())
    .then(data => {

        for (var i=0; i<7; i++){
            bar[i].style.height = `${Math.floor(data[i].amount*2.5)}px`;
            info[i].textContent = "$" + `${data[i].amount}`
            
            if (currentday === data[i].day){
                bar[i].classList.add("current-day")
            }

        }
        
    })


    