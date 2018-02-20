import React, {Component} from 'react';
import SearchBox from '../components/SearchBox.js';
import JobsList from '../components/JobsList.js';

class JobsBox extends Component {

  constructor(){
    super();
    this.state = {
      jobs: [],
      
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  formUrl(language){
    return (
      `https://jobs.github.com/positions.json?description=`+language
    )
  }

  handleSearch(languageObject){
    const searchedLanguage = languageObject.language;
    const url = this.formUrl(searchedLanguage);
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if (xhr.status != 200)return;
      const jsonString = xhr.responseText;
      const data = JSON.parse(jsonString);
      console.log(data);
      this.setState({jobs: data})
    })
    xhr.send();
  }

  render(){
    return (
      <div>
      <SearchBox onButtonClick={this.handleSearch}/>
      <JobsList jobs={this.state.jobs}/>

    </div>

    )
  }
}

export default JobsBox;
