var animations = document.querySelectorAll('.animated')
var active_urls = [];

function animate(e) {
	var e_url = this.src;
	if(!active_urls.includes(e_url)){
		active_urls.push(e_url);
		this.src = e_url.slice(0, -3)+"gif";
	} else {
		active_urls = active_urls.filter(a => a !== e_url)
		this.src = e_url.slice(0, -3)+"jpg";
	}
}

for (var i = 0; i < animations.length; i++) {
    animations[i].addEventListener('click', animate, false);
}

var filter = document.querySelector('#filters');

var bothLanguages = document.querySelectorAll('.both');
var onlyWritten = document.querySelectorAll('.written');
var onlySpoken = document.querySelectorAll('.spoken');
var onlyRussian = document.querySelectorAll('.onlyRussian');
var vowels = document.querySelectorAll('.vowel');
var consonants = document.querySelectorAll('.consonant');

var isFilter = document.querySelector('#filtroOption'); 

console.log(bothLanguages);

filter.onchange = _ => changeTable(filter.value);
isFilter.onchange = _ => changeTable(filter.value);

function clearSelection() {
	bothLanguages.forEach(item => { item.style.border = ""; item.style.display = ""; });
	onlyWritten.forEach(item => { item.style.border = ""; item.style.display = ""; });
	onlySpoken.forEach(item => { item.style.border = ""; item.style.display = ""; });
	onlyRussian.forEach(item => { item.style.border = ""; item.style.display = ""; });
}

function filterTable (filterBoth, filterWritten, filterSpoken, filterRussian) {
	bothLanguages.forEach(item => item.style.display = "");
	onlyWritten.forEach(item => item.style.display = "none");
	onlySpoken.forEach(item => item.style.display = "none");
	onlyRussian.forEach(item => item.style.display = "none");	
}

function highlightTableCells(bothBorder, writtenBorder, spokenBorder, russianBorder) {
	bothLanguages.forEach(item => item.style.border = bothBorder);
	onlyWritten.forEach(item => item.style.border = writtenBorder);
	onlySpoken.forEach(item => item.style.border = spokenBorder);
	onlyRussian.forEach(item => item.style.border = russianBorder);
}


function changeTable(filterOption){	
	if (filterOption === "LETRAS ESCRITAS E PRONUNCIADAS DA MESMA FORMA TANTO EM PORTUGUÊS QUANTO EM RUSSO") {
		clearSelection();
		if(!isFilter.checked){
			highlightTableCells("solid", "", "", "");
		} else {
			filterTable("", "none", "none", "none");
		}
	} else if (filterOption === "LETRAS QUE TÊM A FORMA ESCRITA FAMILIAR PARA BRASILEIROS, MAS CUJA A PRONUNCIA É DIFERENTE") {
		clearSelection();
		if(!isFilter.checked){
			highlightTableCells("", "solid", "", "");
		} else {
			bothLanguages.forEach(item => item.style.display = "none");
			onlyWritten.forEach(item => item.style.display = "");
			onlySpoken.forEach(item => item.style.display = "none");
			onlyRussian.forEach(item => item.style.display = "none");
		}
	} else if (filterOption === "LETRAS QUE TÊM A FORMA ESCRITA DIFERENTE, MAS A PRONUNCIA SEMELHANTE TANTO EM PORTUGUÊS QUANTO RUSSO") {
		clearSelection();
		if(!isFilter.checked){
			highlightTableCells("", "", "solid", "");
		} else {
			bothLanguages.forEach(item => item.style.display = "none");
			onlyWritten.forEach(item => item.style.display = "none");
			onlySpoken.forEach(item => item.style.display = "");
			onlyRussian.forEach(item => item.style.display = "none");
		}
	} else if (filterOption === "LETRAS QUE NÃO EXISTEM EM PORTUGUÊS") {
		clearSelection();
		if(!isFilter.checked){
			highlightTableCells("", "", "", "solid");
		} else {
			bothLanguages.forEach(item => item.style.display = "none");
			onlyWritten.forEach(item => item.style.display = "none");
			onlySpoken.forEach(item => item.style.display = "none");
			onlyRussian.forEach(item => item.style.display = "");
		}
	} else {
		clearSelection();
	}
};
