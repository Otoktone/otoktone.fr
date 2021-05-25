/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
//import './styles/app.css';
import './styles/global.scss';

// start the Stimulus application
import './bootstrap';

// FONTAWESOME
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

/*
* FRONT CSS
*/
import './styles/front/style.css';
import './styles/front/portal/portal.css';
import './styles/front/nav/toggle-menu.css';
import './styles/front/nav/side-menu.css';
import './styles/front/presentation/presentation.css';
import './styles/front/pages/otoktone.css';
import './styles/front/pages/portfolio.css';

/*
* FRONT JS
*/
import './js/front/portal/portal.js';
//import './js/front/nav/side-menu.js'; <-- remplacé par CSS
import './js/front/slider/slide.js';