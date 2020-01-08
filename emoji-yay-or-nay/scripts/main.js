let emojiElem = document.getElementById("header-emoji");
emojiElem.onclick = function() {
	if (emojiElem.innerHTML.normalize() == String.fromCodePoint(0x1F636).normalize()) {
		emojiElem.innerHTML = "&#x1F92A";
	} else {
		emojiElem.innerHTML = "&#x1F636;";
	}
}
