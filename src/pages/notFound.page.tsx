import {FC} from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage: FC = () => {
    return (
        <main className="main">
            <h1 className="main__title">Page not Found</h1>
            <Link to="/">Go Home</Link>
        </main>
    )
}

export default NotFoundPage