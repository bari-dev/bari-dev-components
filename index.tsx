import { render } from 'solid-js/web';

import './components/navbar/Navbar';
import Builder from './components/Builder';

render(
	() => <Builder />, 
	document.getElementById('root') as HTMLElement
);
