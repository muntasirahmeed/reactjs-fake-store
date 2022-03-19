import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
  //   console.log(props.product);
    const { title, image, price, description } = props?.pd || {};
    const newTitle = title.slice(0, 25);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal  show={show} onHide={handleClose}>
              <div className="p-4">
              <img className="img-fluid w-50 d-block m-auto" src={image} alt="" />
              <h2 className="text-center my-3 text-primary">{newTitle}</h2>
              <h3 className="text-center text-success">{price}$</h3>
            
              <p className="text-secondary"> <span className="text-center d-block text-dark">Description:</span> <br></br> { description}</p>
        </div>
      </Modal>
    </>
  );
};

export default ReactModal;
