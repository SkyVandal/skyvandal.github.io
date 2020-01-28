let text = "Bruno\nCodinha;"
let title = document.getElementById("title")

var key_sounds = ["sounds/key1.mp3", "sounds/key2.mp3", "sounds/key3.mp3", "sounds/key4.mp3", "sounds/key5.mp3"];
var sound;
var ind;

function sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function(){
	  this.sound.play();
	}
	this.stop = function(){
	  this.sound.pause();
	}
  }


function resetInterval() {
	title.innerText = text 
	let height = title.clientHeight
	title.style.minHeight = height + "px"
	
	title.innerText = ""
	let i = 0
	let timer = null
	timer = setInterval(() => {
		if (i >= text.length) {
			clearInterval(timer)
			setTimeout(resetInterval, 5000)
			return
		}
		ind = Math.floor(Math.random() * 5);
		sound = new sound(key_sounds[ind]);
		sound.play();
		title.innerText += text[i++]
	}, 100)
}

resetInterval()

function menu(id) {
	for (let k of document.getElementById("menu").children)
		k.classList.remove("selected")
	event.target.classList.add("selected")
	
	for (let k of document.getElementById("content").children)
		k.style.display = "none"
	document.getElementById(id).style.display = "initial";
}