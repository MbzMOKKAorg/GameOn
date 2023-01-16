/* Inject css */
import './styles/style.css';

import './components/modal';
import './components/form';

// Bump version
import { spanVersion } from './components/domLinker';
// eslint-disable-next-line no-undef
spanVersion.innerText = VERSION;
