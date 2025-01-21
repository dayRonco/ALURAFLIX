import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditarVideo from '../editarCards/edit';



function Modalform(props) {
  return (
   
     <Modal 
     show={props.show}
     onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          EDITAR VIDEO
        </Modal.Title>
      </Modal.Header>
     
      <Modal.Body > 
       <EditarVideo video={props.video} updateVideo={props.updateVideo}></EditarVideo>
      </Modal.Body>
      
      <Modal.Footer>
      </Modal.Footer>
      
    </Modal>
  );
}

export default Modalform