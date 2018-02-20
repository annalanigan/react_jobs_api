import React, {Component} from 'react';

class JobDetail extends Component {

  render(){
    return(
      <tr>
        <td><a href={this.props.url} target="_blank">{this.props.title}</a></td>
        <td>{this.props.location}</td>
        <td><img src={this.props.logo} alt="company logo" width='100px'/></td>
      </tr>

    )
  }


}
export default JobDetail;
