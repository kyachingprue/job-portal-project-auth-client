import React, { useEffect, useState } from 'react';
import AllJobs from './AllJobs';


const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
  }, [setJobs, loading])

  if (loading) {
    return (
      <div className='w-full min-h-screen gap-3 flex justify-center items-center'><span className="loading loading-spinner text-neutral"></span>
        <p className='text-xl font-medium'>Loading</p>
      </div>)
  };
  return (
    <div>
      <h2 className='text-center py-5 text-xl md:text-3xl font-medium'>All Jobs Data:({jobs.length})</h2>
      {/* // All Jobs Data Show */}
      <div className='min-h-screen grid grid-cols-1 my-5 gap-3 md:my-10 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
        {
          jobs?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
        }
      </div>
    </div>
  );
};

export default Jobs;