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
* BACK CSS
*/
import './styles/back/login/login.css';
import './styles/back/admin/dashboard/admin.css';
import './styles/back/admin/post/index.css';
import './styles/back/admin/post/show.css';
import './styles/back/admin/post/new.css';
import './styles/back/admin/post/edit.css';
import './styles/back/admin/category/new.css';
import './styles/back/admin/category/edit.css';

/*
* BACK JS
*/
//import './js/admin/dashboard/dashboard';