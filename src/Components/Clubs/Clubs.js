import React, {Component} from 'react'
import Club from './Club.js'

class Clubs extends Component {
  render(){
    return(
      <div>
        {
            this.props.clubs.map(club=>(
              <div key={club.description}>
                    <Club tittle={club.title} description={club.description} deleteClub={this.props.deleteClub} />
            </div>
          ))
        }
    </div>  
    )
  }
}

export default Clubs