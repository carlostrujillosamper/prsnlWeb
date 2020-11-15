import pause from "./pause";

const alert = async (text) => {
	let terminal = document.querySelector(".terminal");
	let access = document.createElement("div");
	access.setAttribute("class", "access-granted");
	access.innerHTML = text;
	terminal.appendChild(access);
	await pause(2);
	access.remove();
}

export default alert;