import {Route, Routes} from 'react-router-dom'

import NotFoundPage from '../pages/notFound.page'
import CreatePage from '../pages/create.page'
import DecryptPage from '../pages/decrypt.page'


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CreatePage/>}/>
            <Route path="/decrypt/:id" element={<DecryptPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default Router