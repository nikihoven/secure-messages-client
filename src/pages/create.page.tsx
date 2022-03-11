import {FormEvent, useState} from 'react'

interface IFormState {
    message: string,
    passphrase: string,
    days: string,
    hours: string,
    minutes: string
}

const CreatePage = () => {
    const [data, setData] = useState<IFormState>(
        {
            message: '',
            passphrase: '',
            days: '0',
            hours: '0',
            minutes: '1'
        })



    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <main className="main">
            <h1 className="main__title">One time secure message</h1>
            <hr style={{width: '100%'}}/>
            <form
                onSubmit={submitHandler}
                className="form"
            >
                <div className="form__item">
                    <p className="form__title">Message you want to send securely:</p>
                    <textarea
                        className="form__textarea"
                        value={data.message}
                        onChange={event => setData({...data, message: event.target.value})}
                        required
                        placeholder="Message"
                    />
                </div>
                <div className="form__item">
                    <p className="form__title">Passphrase to encrypt the message:</p>
                    <input
                        className="form__input"
                        value={data.passphrase}
                        onChange={event => setData({...data, passphrase: event.target.value})}
                        type="password"
                        required
                        placeholder="Passphrase"
                    />
                </div>
                <div className="form__item">
                    <p className="form__title">Expiration period for the message:</p>
                    <div className="form__item">
                        <p className="form__title">Days</p>
                        <input
                            className="form__input"
                            value={data.days}
                            onChange={event => setData({...data, days: event.target.value})}
                            type="text"
                            required
                            placeholder="Days"
                        />
                    </div>
                    <div className="form__item">
                        <p className="form__title">Hours</p>

                        <input
                            className="form__input"
                            value={data.hours}
                            onChange={event => setData({...data, hours: event.target.value})}
                            type="text"
                            required
                            placeholder="Hours"
                        />
                    </div>
                    <div className="form__item">
                        <p className="form__title">Minutes</p>

                        <input
                            className="form__input"
                            value={data.minutes}
                            onChange={event => setData({...data, minutes: event.target.value})}
                            type="text"
                            required
                            placeholder="Minutes"
                        />
                    </div>
                </div>
                <button>Get one time link for secure message</button>
            </form>
        </main>
    )
}

export default CreatePage