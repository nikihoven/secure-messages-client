import {FC, ReactNode} from 'react'

import {ReactComponent as CloseImage} from './close.svg'

import './index.scss'

interface ModalProps {
    children: ReactNode,
    closeHandler: () => void
}

const Index: FC<ModalProps> = props => {
    return (
        <section className="modal" onClick={props.closeHandler}>
            <div className="modal__content" onClick={event => event.stopPropagation()}>
                {props.children}
                <CloseImage className="modal__close" onClick={props.closeHandler}/>
            </div>
        </section>
    )
}

export default Index