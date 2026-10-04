import React from 'react'
import Card from './Cards/Card'
import User from './Cards/User'


const App = () => {

  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tags1: "Full Time",
    tags2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tags1: "Full Time",
    tags2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "2 days ago",
    post: "React Developer",
    tags1: "Full Time",
    tags2: "Junior Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "7 days ago",
    post: "Software Engineer",
    tags1: "Full Time",
    tags2: "Senior Level",
    pay: "$65/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tags1: "Full Time",
    tags2: "Junior Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "12 days ago",
    post: "UI/UX Engineer",
    tags1: "Full Time",
    tags2: "Senior Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tags1: "Full Time",
    tags2: "Senior Level",
    pay: "$75/hour",
    location: "Delhi, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    name: "Adobe",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tags1: "Part Time",
    tags2: "Junior Level",
    pay: "$40/hour",
    location: "Kanpur, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    name: "Oracle",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tags1: "Full Time",
    tags2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    name: "IBM",
    datePosted: "15 days ago",
    post: "Cloud Engineer",
    tags1: "Full Time",
    tags2: "Junior Level",
    pay: "$42/hour",
    location: "Mumbai, India"
  }
];
  return (
    <div className='parent'>
      {jobs.map((elem)=>{
        return <Card name={elem.name} location={elem.location} pay={elem.pay}/>

      })}
    </div>
  )
}

export default App
