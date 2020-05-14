import React, {Component} from 'react'
import Club from './Club.js'

class Clubs extends Component {
  render(){
    return(
      <div>
        {
            this.props.clubs.map(club=>(
              <div>
                    <Club Tittle={club.title} Description={club.description} key={club.description}/>
            </div>
          ))
        }
    </div>  
    )
  }
}

export default Clubs