import App from './components/app';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
