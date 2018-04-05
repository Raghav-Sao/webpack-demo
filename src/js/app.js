import { span, button, para } from './import-data';

let showtext = true;

button.addEventListener('click', function() {
	showtext = !showtext;
	span.textContent = showtext ? 'Hide' : 'Show';
	para.style.display = showtext ? 'block' : 'none';
});
