const defaultEmoji = String.fromCodePoint(0x1F636);
const altEmoji = String.fromCodePoint(0x1F92A);
let emojiElem = document.getElementById("header-emoji");
emojiElem.innerHTML = defaultEmoji;
emojiElem.onclick = function() {
	if (emojiElem.innerHTML.normalize() == defaultEmoji.normalize()) {
		emojiElem.innerHTML = altEmoji;
	} else {
		emojiElem.innerHTML = defaultEmoji;
	}
}
