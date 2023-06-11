"use client";
import { useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import { cls } from "../../utils/utils";
const Experience = () => {
  const [selectedJob, setSelectedJob] = useState<JobType>(jobs[0]);

  const handleSelectJob = (job: JobType) => {
    setSelectedJob(job);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full">
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

      <div className="lg:w-1/2">
        {selectedJob?.content?.map((job, index) => {
          return (
            <div key={index + 2}>
              {job?.url ? (
                <a href={job?.url} target="_blank" referrerPolicy="no-referrer">
                  <h2 className="font-bold text-lg mb-2 mt-4 underline underline-offset-2">
                    {job.title} &#8599;
                  </h2>
                </a>
              ) : (
                <h2 className="font-bold text-lg mb-2 mt-4">{job.title}</h2>
              )}

              {job.description.map((desc, index) => {
                return (
                  <div key={index + 2} className="pl-4">
                    &gt; {desc}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="flex flex-row w-full gap-4 mt-8 flex-wrap">
          {selectedJob?.techStack.map((tech, index) => {
            return (
              <div key={index}>
                <div className="px-3 py-2 rounded-md bg-neutral-600">
                  <p className="text-xs">{tech}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
