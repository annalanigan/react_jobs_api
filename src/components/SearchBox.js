import React, {Component} from 'react';

class SearchBox extends Component {

  constructor(){
    super(),
    this.state = {
      language: ""
    }

    this.getLanguage = this.getLanguage.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }

  getLanguage(e){
    console.log(e.target.value);
    this.setState({
      language: e.target.value
    })
  }

  handleButtonClick(e){
    e.preventDefault();
    const language = this.state.language.trim();
    if(!language) return;
    this.props.onButtonClick({language: language})

    this.setState({
      language: ""
    })
  }

  render(){
    return (
      <div>
        <h1>Job Search by Programming Language!</h1>
        <form>
          <input type="text" placeholder="language" value={this.state.language} onChange={this.getLanguage} ></input>
          <input type="submit" value="Search" onClick={this.handleButtonClick}></input>
        </form>
      </div>
    )}

}

export default SearchBox;
