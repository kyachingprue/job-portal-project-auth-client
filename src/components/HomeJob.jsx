import React, { useEffect, useState } from 'react';
import AllJobs from './AllJobs';
import { Link } from 'react-router-dom';

const HomeJob = () => {
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
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold text-black'>All Jobs</h2>
        <p className='py-2 md:py-4 text-gray-600 text-sm'> Know your worth and find the job that qualify your life</p>
      </div>
      {/* // All Jobs Data Show */}
      <div className='min-h-screen grid grid-cols-1 my-5 gap-3 md:my-10 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
        {
          jobs.slice(0, 6)?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
        }
      </div>
      <div className='text-center'>
        <Link to="/jobs" className='btn btn-primary my-4 text-xl font-semibold'>see more all data</Link>
      </div>
    </div>
  );
};

export default HomeJob;