userProgress(1);

function userProgress (time) {
	var progressElement = document.querySelector('progress'),
		start = 0,
		time = time*10;

	var intervalId = setInterval( function() {
			if (start > 100) {
				clearInterval(intervalId);
				progressCallback();
			} else {
				progressElement.value = start;
				start++;
			}
		},time);
}

function progressCallback() {
	document.querySelector('.hidden-block').style.display = 'block';
}