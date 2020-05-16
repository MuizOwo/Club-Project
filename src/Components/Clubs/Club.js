import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {Card } from 'react-bootstrap'
import { Divider } from "@chakra-ui/core";
import './Clubs.css'
import blue from '@material-ui/core/colors/blue'


const  background = blue[500]
const color=blue[500]

const Club = ({tittle,description,deleteClub}) => {
     const [show, setShow] = useState(false);
          return (
               <div className='club'>
                    <Card>
                         <Card.Body>
                              <Card.Text>
                                   {tittle}
                              </Card.Text>
                              <Divider style={{color:(color)}}/>
                              <Card.Text>
                                   Click on the button below to know more about this club
                              </Card.Text>
                              </Card.Body>
                                   <div className='button'>
                                        <div className='card-btn'>
                                             <Button className="about-btn" variant="primary" onClick={() => setShow(true)}>
                                                  See More
                                             </Button>
                                        </div>
                                        <div className='card-btn'>
                                             <Button className="about-btn" variant="primary" onClick={() => deleteClub(description)}>
                                                  Delete Club
                                             </Button>
                                        </div>
                                   </div>
                              </Card>

                              <Modal
                                   show={show}
                                   onHide={() => setShow(false)}
                                   dialogClassName="modal-90w"
                                   aria-labelledby="example-custom-modal-styling-title"
                                   >

                              <Modal.Header closeButton style={{backgroundColor:(background)}}>
                              <Modal.Title className=" madal-title" id="example-custom-modal-styling-title" >
                                   {tittle}
                              </Modal.Title>
                              </Modal.Header>

                              <Modal.Body >
                              <p className='modal-body'>
                                   {description}
                              </p>
                              </Modal.Body>
                              </Modal>
                    </div>
          )
     }

export default Club
