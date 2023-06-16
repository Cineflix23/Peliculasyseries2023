//seccion del buscador interno con js
$(document).ready(function () {
	$("input[type=text]").on("keyup", function () {
		option = false;
		$("input[type=text]").each(function () {
			if (!this.value) {
				option = true;
			}
		});
		$("input[type=submit]").attr("disabled", option);
	});
});
$('.Show').click(function () {
	$('#target').show(500);
	$('.Show').hide(0);
	$('.Hide').show(0);
});
$('.Hide').click(function () {
	$('#target').hide(500);
	$('.Show').show(0);
	$('.Hide').hide(0);
});
$('.toggle').click(function () {
	$('#target').toggle('slow');
});
$(document).ready(function () {

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function () {
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.gallery--item').css('transform', 'scale(0)');
		function hideProduct() {
			$('.gallery--item').hide();
		} setTimeout(hideProduct, 400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct() {
			$('.gallery--item[category="' + catProduct + '"]').show();
			$('.gallery--item[category="' + catProduct + '"]').css('transform', 'scale(1)');
		} setTimeout(showProduct, 400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function () {
		function showAll() {
			$('.gallery--item').show();
			$('.gallery--item').css('transform', 'scale(1)');
		} setTimeout(showAll, 400);
	});
});

/*SEction de mostrar y ocultar seecciones de peliculas*/
function peli1() {
	document.getElementById('peli1').style.display = 'block';
	document.getElementById('peli2').style.display = 'none';
	document.getElementById('peli3').style.display = 'none';

}

function toggleSection(sectionId){
	const section = document.getElementById(`p-center${sectionId}`);
	const openButton = section.previousElementSibling.querySelector('.toggle-button:nth-child(1)');
	const closeButton = section.previousElementSibling.querySelector('.toggle-button:nth-child(2)');
	const BUSCADOR = document.getElementById('p-centerro');
	const Buscar = document.getElementById('Ocultame');
	const Modal = document.querySelector('.modal-backdrop');
	const Category1 = document.getElementById('Category1');
	const Category2 = document.getElementById('Category2');
	if(section.style.display === 'none'){
		section.style.display = 'flex';
		BUSCADOR.style.display = 'none';
		Buscar.style.display = 'none';
		Category1.style.display = 'none';
		Category2.style.display = 'none';
		Modal.style.display = 'none';
		openButton.style.display = 'none';
	}else{
		section.style.display = 'none';
		openButton.style.display = 'flex';
	}
}
/*Funciones para redireccionar a las pagina de destino usando una en formato img*/
function Series(){
	location.href = 'series.html';
}
function Peliculas(){
	location.href = 'categorias.html';
}


//Funciones añadiddas para las series cada una y ocultar el wrapp/

function toggleSerie(sectionId){
	const section = document.getElementById(`serie${sectionId}`);
	const openButton = section.previousElementSibling.querySelector('.toggle-button:nth-child(1)');
	const closeButton = section.previousElementSibling.querySelector('.toggle-button:nth-child(2)');
	const BUSCADOR = document.getElementById('p-centerro');
	const Buscar = document.getElementById('Ocultame');
	const Modal = document.querySelector('.modal-backdrop');
	const Category1 = document.getElementById('Category1');
	const Category2 = document.getElementById('Category2');
	if(section.style.display === 'none'){
		section.style.display = 'flex';
		BUSCADOR.style.display = 'none';
		Buscar.style.display = 'none';
		Category1.style.display = 'none';
		Category2.style.display = 'none';
		Modal.style.display = 'none';
		openButton.style.display = 'none';
	}else{
		section.style.display = 'none';
		openButton.style.display = 'flex';
	}
}



function Temporada1() {
	document.getElementById('temp1').style.display = 'flex';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'none';
}
function Temporada2() {
	document.getElementById('temp1').style.display = 'none';
	document.getElementById('temp2').style.display = 'flex';
	document.getElementById('temp3').style.display = 'none';
}
function Temporada3() {
	document.getElementById('temp1').style.display = 'none';
	document.getElementById('temp2').style.display = 'none';
	document.getElementById('temp3').style.display = 'flex';
}
function Temporadas8() {
	document.getElementById('tempos8').style.display = 'flex';
	document.getElementById('tempos9').style.display = 'none';
}
function Temporadas9() {
	document.getElementById('tempos8').style.display = 'none';
	document.getElementById('tempos9').style.display = 'flex';
}

function Tempo1() {
	document.getElementById('tempo1').style.display = 'flex';
	document.getElementById('tempo2').style.display = 'none';
}
function Tempo2() {
	document.getElementById('tempo1').style.display = 'none';
	document.getElementById('tempo2').style.display = 'flex';
}

