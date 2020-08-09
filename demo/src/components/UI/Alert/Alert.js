import React from 'react';
import './Alert.css';

const Alert = props => {
    return (
        <>
           {props.show ? <div className={['Alert', props.type].join(' ')}>
                {props.children}
                {props.dismiss ? <button className='close-alert-btn' onClick={props.dismiss}>X</button> : null}
            </div> : null}
        </>
    )
}






export default Alert;