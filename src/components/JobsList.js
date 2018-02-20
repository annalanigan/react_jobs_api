import React, {Component} from 'react';
import JobDetail from './JobDetail.js';
import JobTitles from './JobTitles.js';


class JobsList extends Component {

  render(){
    const jobsNodes = this.props.jobs.map((job, index) => {
      while (index < 5){
        return(
          <JobDetail key={index} title={job.title} location={job.location} url={job.url} logo={job.company_logo}>
          </JobDetail>
        )
      }
    }

  )

  console.log(jobsNodes)

  return(
    <table>
      <thead>
        <JobTitles nodes={jobsNodes.length}/>
        {jobsNodes}
      </thead>
    </table>
  )

}

}

export default JobsList;
