"use strict";

// Assign elements their events
function loadEvents() {
	const menuBtn = document.querySelector("#menu-btn");
	const menuContent = document.querySelector("#main-header nav");

	menuBtn.addEventListener("click", () => {
		if (menuContent.style.display != "flex") {
			menuContent.style.display = "flex";
			menuBtn.firstElementChild.src = "images/icon-close.svg";
		} else {
			menuContent.style.display = "none";
			menuBtn.firstElementChild.src = "images/icon-hamburger.svg";
		}
	});
}

loadEvents();
