// 右侧气泡式提醒，写的极烂233
var bubbleNum = 0;
function bubbleNoticer(text, type, time = 1500) {
	bubbleNum = setBubbleNoticer(text, type, time);
	function setBubbleNoticer(text, type, time) {
		if (type == "normal") {
			var bg = "#cfe2ff" ;
			var iconbg = "#084298" ;
			var icon = "\\f021";
		} else if (type == "problem") {
			var bg = "#fff3cd";
			var iconbg = "#664d03";
			var icon = "\\f071";
		} else if (type == "err") {
			var bg = "#f8d7da";
			var iconbg = "#842029";
			var icon = "\\f12a";
		} else if (type == "ok") {
			var bg = "#d1e7dd";
			var iconbg = "#0f5132";
			var icon = "\\f00c";
		} else {
			var bg = type;
			var iconbg = "#084298" ;
			var icon = "\\f021";
		}
		var noticer = document.createElement("div");
		var c = document.getElementsByClassName("bubbleNoticer").length;
		if (c == 0) {
			bubbleNum = 0;
		} else {
			bubbleNum = bubbleNum+1;
		}
		noticer.setAttribute("class", "bubbleNoticer " + type);
		noticer.style.backgroundColor = bg;
		noticer.style.top = 60 + bubbleNum * 40 + "px";
		var node = document.createTextNode(text);
		noticer.appendChild(node);
		var page = document.getElementById("kratos-wrapper");
		page.appendChild(noticer);
		document.styleSheets[0].insertRule('.' + type + '::before{color: '+ iconbg +';content: "'+ icon +'";}',0)
		setTimeout(() => {
			remove();
		}, time);
		function remove() {
			noticer.style.top = "-40px";
			setTimeout(() => {
				page.removeChild(noticer);
			}, 500);
		}
		return bubbleNum;
	}
}
