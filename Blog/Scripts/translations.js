
$('select').change(function () {
	if ($(this).children('option:first-child').is(':selected')) {
		$(this).addClass('placeholder');
	} else {
		$(this).removeClass('placeholder');
	}
});

document.getElementById('optionSelector').addEventListener('change', displayDate, false);

function displayDate() {

	var e = document.getElementById('optionSelector');
	var choosenValue = e.options[e.selectedIndex].value;

	var textboxes = "";
	for (var i = 1; i <= choosenValue; i++) {
		var initialId = "initialText" + i.toString();
		textboxes += '<div class="form-inline">';
		textboxes += '<label class="control-label" for="' + initialId + '" >Parametr ' + i + ' </label> ';
		textboxes += '<select class="form-control form-space" onchange="myFunction(this)" id="' + initialId + '">' +
			'<option value="" disabled selected style="display:none;">Select your option</option>' +
			'<option value="1">[nr]</option>' +
			'<option value="2">[string]</option>' +
			'<option value="3">[translation]</option>' +
			'</select>';
		var translatedId = "translatedText" + i.toString();
		textboxes += '<label class="control-label" for="' + translatedId + '" > Translation for ' + i + ' </label> ';
		textboxes += '<select class="form-control form-space" id="' + translatedId + '">' +
			'<option value="" disabled selected style="display:none;">Select parametr first!</option>' +
			'</select>';

		textboxes += '<span class="glyphicon glyphicon-remove noAnimate" id="gly' + i.toString() +'"></span>';
		textboxes += '</div>';
	}
	textboxes += '<br/><br/><textarea class="form-control" id="translationsTextarea" style="max-width: none;" rows="8" placeholder="Put here your translations!"></textarea>' +
		'<button class="btn btn-success" style="padding-top: 9px; padding-bottom: 9px; margin-top: 12px;" onclick="evaluate(this)">' +
		'<span class="glyphicon glyphicon-book noAnimate"></span>' +
		' Translate it!</button>';


	document.getElementById("optionChooser").innerHTML = textboxes;

	$('#optionChooser').hide();
	$('#optionChooser').fadeIn("slow");
}

function myFunction(sel) {
	
	var selectionTranslation = document.getElementById('translatedText' + sel.id.substring(sel.id.length - 1));
	var selectionOk = document.getElementById('gly' + sel.id.substring(sel.id.length - 1));
	selectionOk.removeClass("glyphicon-remove");
	selectionOk.addClass("glyphicon-ok wow bounceInLeft animated");
	var length = selectionTranslation.options.length;
	for (var i = 0; i < length; i++) {
		selectionTranslation.options[i] = null;
	}

	if (sel.value == 1) {
		var items = [];
		for (var i = -10; i < 10; i++) {
			if (i != 0)
				items.push("[nr]" + ((i > 0) ? "+" + i.toString() : i.toString()));
			else {
				items.push("[nr]");
			}
		}
		for (var i in items) {
			selectionTranslation.add(new Option(items[i], items[i]));
		}
		selectionTranslation.selectedIndex = 10;
	}
	else if (sel.value == 2) {
		selectionTranslation.add(new Option("[string]", "[string]"));
	}
	else if (sel.value == 3) {
		selectionTranslation.add(new Option("[translation]", "[translation]"));
	}
}


function evaluate(e) {
	var translations = document.getElementById("translationsTextarea").innerText;
	translations = translations.split('\n');
	var translationResult = "";
	for (var translation in translations.split('\n')) {
		translationResult += translation;
		translationResult += '\n' + 'Translated into:' + '\n';
		translationResult += translation;
	}
	document.getElementById("finalResult").innerHTML = translationResult;
}
