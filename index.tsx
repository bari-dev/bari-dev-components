import "./index.css";
import "tailwindcss/tailwind.css";
import './components/navbar/Navbar';
import { render } from 'solid-js/web';
import Builder from './components/Builder';
render(
	() => <Builder />, 
	document.getElementById('root') as HTMLElement
);
