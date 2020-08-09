import React ,{useState}from 'react';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

const AllUiComponents = () => {
    const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const [alerts,setAlerts] = useState([
    { type: 'danger', status: true},
    { type: 'success', status: true },
    { type: 'primary', status: true },
  ]);

  const closeAlert = index => {
    const alertsCopy = [...alerts];
    alertsCopy[index].status = false;
    setAlerts(alertsCopy);
  }

  const alertByModal = () =>{
    window.alert('Continued!');
  }

    return(
        <>
        <button onClick={showModal}>Open Modal</button>
        <Modal show={modal} close={closeModal} continue={alertByModal} title='Some Title'>
          <p className="modal-text">Some text</p>
        </Modal>
        
        <Alert show={alerts[0].status} type="danger" dismiss={() => closeAlert(0)}>
          Alert Danger!
       </Alert>
        <Alert show={alerts[1].status}  type="success">
          Alert Success!
       </Alert>
        <Alert show={alerts[2].status}  type='primary' dismiss={() => closeAlert(2)}>
          Alert Primary!
       </Alert>
       </>
    );
}

export default AllUiComponents;