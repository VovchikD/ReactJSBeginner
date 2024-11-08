import * as ReactDOMClient from 'react-dom/client';
import Main from './main'
import './css/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<Main />)