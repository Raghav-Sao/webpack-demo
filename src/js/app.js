import { span, button, para } from './import-data';
import '../css/style.css';

let showtext = true;

button.addEventListener('click', function() {
	showtext = !showtext;
	span.textContent = showtext ? 'Hide' : 'Show';
	para.style.display = showtext ? 'block' : 'none';
});
