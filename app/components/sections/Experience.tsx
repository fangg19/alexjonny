"use client";
import { useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import { cls } from "../../utils/utils";
import { HeaderVariant } from "@/app/animations/animations";
import { motion } from "framer-motion";
import FakeCheckbox from "../FakeCheckbox";
import JobItem from "../JobItem";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState<JobType>(jobs[0]);

  const handleSelectJob = (job: JobType) => {
    setSelectedJob(job);
  };

  return (
    <div id="work" className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col gap-8 lg:w-1/2 lg:pr-12">
        {jobs.map((job) => {
          return (
            <JobItem
              handleSelectJob={handleSelectJob}
              job={job}
              selectedJob={selectedJob}
              key={job.id}
            />
          );
        })}
      </div>

      <div className="lg:w-1/2">
        {selectedJob?.content?.map((job, index) => {
          return (
            <div key={index + 2} className="mb-6">
              {job?.url ? (
                <a href={job?.url} target="_blank" referrerPolicy="no-referrer">
                  <h2 className="font-bold text-lg mb-2 underline underline-offset-2">
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
        <div className="flex flex-row w-full gap-4 mt-8 flex-wrap"></div>
      </div>
    </div>
  );
};

export default Experience;
