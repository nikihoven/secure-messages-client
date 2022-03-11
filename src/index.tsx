import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

import './assets/styles/start.scss'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)