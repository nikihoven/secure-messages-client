import {FC, FormEvent, ReactNode, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

import MessageService from '../api/MessageService'
import Modal from '../components/modal'

const DecryptPage: FC = () => {
    const [passphrase, setPassphrase] = useState<string>('')
    const [valid, setValid] = useState<boolean>(false)
    const [modal, setModal] = useState<ReactNode | null>(null)

    const {id} = useParams()

    const closeHandler = () => {
        setModal(null)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!passphrase) {
            setModal(<Modal closeHandler={closeHandler} children={<h1>Incorrect data!</h1>}/>)
        }

        if (!id) {
            setValid(false)
        } else {
            MessageService.decryptMessage(id, passphrase)
                .then(data => {
                    setModal(
                        <Modal closeHandler={closeHandler}>
                            <h1>Message:</h1>
                            <p>{data.data}</p>
                            <hr/>
                            <Link to="/">Reply with another secure message</Link>
                        </Modal>
                    )
                })
                .catch(err => {
                    setModal(
                        <Modal closeHandler={closeHandler}>
                            <h1>Error:</h1>
                            <hr style={{width: '100%'}}/>
                            <p>{err.response ? err.response.data.message : 'Unresolved error'}</p>
                        </Modal>
                    )
                })
                .finally(() => setPassphrase(''))
        }
    }

    useEffect(() => {
        id && MessageService.validateMessageId(id)
            .then(() => setValid(true))
            .catch()

    }, [])

    return (
        <main className="main">
            <h1 className="main__title">View secure message</h1>
            <hr style={{width: '100%'}}/>
            {valid ?
                <>
                    <form
                        onSubmit={submitHandler}
                        className="form"
                    >
                        <div className="form__item">
                            <p>Password</p>
                            <input
                                value={passphrase}
                                onChange={event => setPassphrase(event.target.value)}
                                type="password"
                                required
                                placeholder="Password"
                                autoComplete="false"
                            />
                        </div>
                        <button>View Message</button>
                    </form>
                    {modal}
                </>
                :
                <>
                    <h1 className="main__title">Unknown message</h1>
                    <p className="main__subtitle">It either never existed or has already been expired</p>
                    <Link className="main__link" to="/">Go to create page</Link>
                </>
            }
        </main>
    )
}

export default DecryptPage