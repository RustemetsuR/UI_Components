import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
    const btnArr = [
        {type: 'cancel modal-btns', label:'Cancel', clicked: props.close},
        {type: 'continue modal-btns', label:'Continue', clicked: props.continue},
    ]
    const btn = btnArr.map(btns =>{
        return(
        <button className={btns.type} onClick={btns.clicked}>{btns.label}</button>
        )
    })
    return(
    <>
    <Backdrop show={props.show} clicked={props.closed}/>
        <div className="Modal" style={{ 
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <h3 className="modal-title">{props.title}</h3>
            <button className="close-modal-btn" onClick={props.close}>X</button>
            {props.children}
            {btn}
        </div>
    </>
)}





export default Modal;