;(function (window, document, undefined) {
	var nightModeStorage = localStorage.getItem('gmtNightMode');
	var nightMode = document.querySelector('#night-mode');
	var metaThemeColor = document.querySelector("meta[name=theme-color]");
	var initialThemeColor = metaThemeColor.content;

	if (nightModeStorage) {
		document.documentElement.classList.add('night-mode');
		metaThemeColor.setAttribute("content", '#2b2b2b');
        nightMode.checked = true;
	}


	// When clicked, toggle night mode on or off
	nightMode.addEventListener('click', function (event) {
		document.documentElement.classList.toggle('night-mode');

		if (typeof(DISQUS) !== 'undefined') {
			DISQUS.reset({
				reload: true,
					config: function () {
						this.page.identifier = document.location.href;
						this.page.url = document.location.href;
					}
			});
		}

		if ( document.documentElement.classList.contains('night-mode') ) {
			localStorage.setItem('gmtNightMode', true);
			metaThemeColor.setAttribute("content", '#2b2b2b');
			return;
		}
		localStorage.removeItem('gmtNightMode');
		metaThemeColor.setAttribute("content", initialThemeColor);
	}, false);

})(window, document);


/*const nightMode = document.querySelector('#night-mode');

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
    // adiciona a classe `night-mode` ao html
    document.documentElement.classList.toggle('night-mode');
});
// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode');
const nightMode = document.querySelector('#night-mode');

// caso tenha o valor no localStorage
if (nightModeStorage) {
    // ativa o night mode
    document.documentElement.classList.add('night-mode');

    // já deixa o input marcado como ativo
    nightMode.checked = true;
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
    // adiciona a classe `night-mode` ao html
    document.documentElement.classList.toggle('night-mode');

    // se tiver a classe night-mode
    if ( document.documentElement.classList.contains('night-mode') ) {
        // salva o tema no localStorage
        localStorage.setItem('gmtNightMode', true);
        return;
    }
    // senão remove
    localStorage.removeItem('gmtNightMode');
});
// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode');
const nightMode = document.querySelector('#night-mode');
// pega o valor do meta tag
const metaThemeColor = document.querySelector("meta[name=theme-color]");

// caso tenha o valor no localStorage
if (nightModeStorage) {
    // ativa o night mode
    document.documentElement.classList.add('night-mode');
    // pinta o theme color na meta tag
    metaThemeColor.setAttribute("content", '#2b2b2b');
    // já deixa o input marcado como ativo
    nightMode.checked = true;
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
    // adiciona a classe `night-mode` ao html
    document.documentElement.classList.toggle('night-mode');

    // se tiver a classe night-mode
    if ( document.documentElement.classList.contains('night-mode') ) {
        // salva o tema no localStorage
        localStorage.setItem('gmtNightMode', true);
        // pinta o theme color na meta tag
        metaThemeColor.setAttribute("content", '#2b2b2b');
        return;
    }
    // senão remove
    localStorage.removeItem('gmtNightMode');
    // senão bota a cor original
    metaThemeColor.setAttribute("content", '#005f97');
});