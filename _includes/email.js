try {
	function d(n, t) {
		var result = "",
			i = 0,
			c = "";
		for (i = 0; i < n.length; i += 1) {
			c = n.charCodeAt(i);
			if (c >= 65 && c <= 90) {
				result += String.fromCharCode((c - 65 + t) % 26 + 65);
			} else if (c >= 97 && c <= 122) {
				result += String.fromCharCode((c - 97 + t) % 26 + 97);
			} else {
				result += n.charAt(i);
			}
		}
		return result;
	};

	setTimeout(function() {
		var links = document.getElementsByTagName("a"), i, href, e, u;

		for (i = 0; i < links.length; i += 1) {
			href = links[i].getAttribute("href");
			if (href) {
				if (href.substring(0, 7) === "mailto:") {
					e = href.substring(7, href.length);
					if (e) {
						u = d(e, 12);
						links[i].href = "mailto:" + u;
						if(links[i].innerHTML === e){
							links[i].innerHTML = u;
						}
						links[i].style.display = "inline-block";
					}
				}
			}
		}
	}, 500);

} catch (ignore) {}