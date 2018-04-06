import { isPrimeNumber, getNextPrime } from './primeNumberUtility';
import { span, button, para, getPrimeButton, primeText } from './import-data';
import '../css/style.css';

let showtext = true;

button.addEventListener('click', function() {
	showtext = !showtext;
	span.textContent = showtext ? 'Hide' : 'Show';
	para.style.display = showtext ? 'block' : 'none';
});

getPrimeButton.addEventListener('click', function() {
	primeText.textContent = getNextPrime(primeText.textContent ? primeText.textContent : 0);
});
