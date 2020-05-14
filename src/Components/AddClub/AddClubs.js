import React , { useState} from 'react'
import { Button } from 'react-bootstrap'
import { Textarea } from "@chakra-ui/core";
import './AddClubs.css'

function AddClubs(props) {
     const [title, setTitle] = useState("")
     const [description, setDescription] = useState("")
          return (
               <div className='add-club'>
                    <form className='col s12'>
                         <div className='clubValue'>
                              <div className='inputValue'>
                                   <input placeholder='Tittle' value={title} onChange={(e) => setTitle(e.target.value)} />
                              </div>
                              <div className='text-area'>
                                   <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                              </div>
                         </div>
                              <div className='card-btn'>
                                        <Button className="about-btn" variant="primary" onClick={() => {
                                             props.add({title, description})
                                        }}>
                                             Add Club
                                        </Button>
                              </div>
               </form>
             </div>
          )
}

export default AddClubs
