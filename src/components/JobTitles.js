import React, {Component} from 'react';

class JobTitles extends Component {

  render(){
    if(this.props.nodes === 0)return null;
    return(
      <tr>
        <th>Job Title</th>
        <th>Job Location</th>
        <th>Company</th>
      </tr>
    )}

  }

export default JobTitles;
