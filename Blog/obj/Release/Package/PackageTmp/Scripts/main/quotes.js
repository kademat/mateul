$(document).ready(function () {


	$("#loadOtherQuote").click(
		function() {
		var text = $("#quoteText");
		var author = $("#quoteAuthor");
		var tableAuthorQuote = [
			"If you can dream it, you can do it.", "Walt Disney",
			"There's a way to do it better - find it.", "Thomas A. Edison",
			"In order to succeed, we must first believe that we can.", "Nikos Kazantzakis",
			"We may encounter many defeats but we must not be defeated.", "Maya Angelou",
			"It does not matter how slowly you go as long as you do not stop.", "Confucius",
			"Always do your best. What you plant now, you will harvest later.", "Og Mandino",
			"You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead.", "George Lucas",
			"A person ignorant of the possibility of failure can be a halfbrick in the path of the bicycle of history.", "Terry Pratchett",
			"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "Thomas A. Edison",
			"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", "Confucius"
		];
		var nrCurrentQuote = 0;
		for (var i = 0; i < tableAuthorQuote.length; i += 2) {
			if (text.text() == tableAuthorQuote[i]) {
				nrCurrentQuote = i;
				if (nrCurrentQuote + 3 > tableAuthorQuote.length)
					nrCurrentQuote = -2;
				break;
			}
		}
		text.text(tableAuthorQuote[nrCurrentQuote + 2]);
		author.text(tableAuthorQuote[nrCurrentQuote + 3]);

		text.hide();
		text.fadeIn("slow");

		author.hide();
		author.fadeIn("fast");

		}
	);
});