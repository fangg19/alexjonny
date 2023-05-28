"use client";
import { useState } from "react";
import { JobType, jobs } from "../utils/jobs";
import { cls } from "../utils/utils";
const Experience = () => {
  const [selectedJob, setSelectedJob] = useState<JobType>(jobs[0]);

  const handleSelectJob = (job: JobType) => {
    setSelectedJob(job);
  };

  return (
    <div className="flex flex-col gap-8">
      {jobs.map((job) => {
        return (
          <div
            onClick={() => handleSelectJob(job)}
            key={job.id}
            className={cls(
              selectedJob.id !== job.id && "opacity-30",
              " flex flex-row relative cursor-pointer"
            )}
          >
            <div className="h-2 w-4 bg-purple-500 absolute top-2 -left-4" />

            <div className="ml-2">
              <h1>
                {job.jobTitle} @{job.company}
              </h1>
              <p>{job.period}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
