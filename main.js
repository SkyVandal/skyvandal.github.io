let text = "Bruno\nCodinha;"
let title = document.getElementById("title")


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