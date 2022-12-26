/* Inject css */
import './styles/modal.css';

import './components/modal';

// Bump version
import { spanVersion } from './components/domLinker';
// eslint-disable-next-line no-undef
spanVersion.innerText = VERSION;
