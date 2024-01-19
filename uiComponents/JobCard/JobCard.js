import React from 'react';
import Button from "../../uiComponents/button/Button";


const JobCard = () => {
  return (
    <div className="job-card">
      <div className="title-wrapper">
        <div className="title">Backend Engineer</div>
        <Button red lg>
          Apply Now
        </Button>
      </div>
      <div>
        <p>Australia</p>
        <p>
          We are looking for a motivational backend engineer to join our product
          team in Australia. You will be responsible for the building tools that
          process, analyze and monitor data - the most important part of our
          product! Read more.
        </p>
      </div>
    </div>
  );
};

export default React.memo(JobCard);
