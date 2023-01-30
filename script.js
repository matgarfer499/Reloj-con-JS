"use strict"

function currentTime(){
	let date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();

	hh = (hh < 10) ? "0" + hh : hh;

	mm = (mm < 10) ? "0" + mm : mm;

	ss = (ss < 10) ? "0" + ss : ss;

	let time = hh + ":" + mm + ":" + ss;

	let hhRotation = ((hh % 12) * 180) / 6;
	let mmRotation = (mm * 180) / 30;
	let ssRotation = (ss * 180) / 30;

	digital.innerHTML = time;

	hours.style.transform = "rotate(" +hhRotation+ "deg)";
	minutes.style.transform = "rotate(" +mmRotation+ "deg)";
	seconds.style.transform = "rotate(" +ssRotation+ "deg)";
}
setInterval(currentTime, 1000);

const swithClock = document.querySelector('#clock input[type="checkbox"]');
function changeClock(ev){
	if (ev.target.checked) {
		watch.style.width = '500px';
		watch.style.height = '500px';
		digital.style.fontSize = '20px';
		digital.style.position = 'absolute';
		digital.style.top = '51%';
		digital.style.border = '2px solid red';
		digital.style.padding = '5px';
		hours.style.visibility = 'visible';
		minutes.style.visibility = 'visible';
		seconds.style.visibility = 'visible';
	}else{
		watch.style.width = '60%';
		watch.style.height = '60%';
		digital.style.fontSize = '8rem';
		digital.style.textAlign = 'center';
		digital.style.position = 'relative';
		digital.style.top = '0%';
		digital.style.border = 'none';
		digital.style.padding = '0px';
		hours.style.visibility = 'hidden';
		minutes.style.visibility = 'hidden';
		seconds.style.visibility = 'hidden';
	}
}

swithClock.addEventListener("change", changeClock);


const colorTheme = document.querySelector('#switch input[type="checkbox"]');
function changeMode(ev){
	if(ev.target.checked){
		document.documentElement.setAttribute('theme', 'light');
	} else {
		document.documentElement.setAttribute('theme', 'dark');
	}
}
colorTheme.addEventListener('change', changeMode);