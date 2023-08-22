"use client";
import { useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import { cls } from "../../utils/utils";
import { HeaderVariant } from "@/app/animations/animations";
import { motion } from "framer-motion";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState<JobType>(jobs[0]);

  const handleSelectJob = (job: JobType) => {
    setSelectedJob(job);
  };

  const getDaysCount = (
    startDate: Date,
    endDate: Date,
    stillWorking: boolean
  ) => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log("stillWorking", stillWorking);

    return stillWorking ? `${diffDays} days and counting` : `${diffDays} days`;
  };

  const getPeriod = (startDate: Date, endDate: Date) => {
    const isPresent = endDate.getTime() === new Date().getTime();
    const startMonth = startDate.toLocaleString("default", { month: "long" });
    const endMonth = endDate.toLocaleString("default", { month: "long" });
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    return isPresent ? (
      <p>
        {startMonth} {startYear} - present
      </p>
    ) : (
      <p>
        {startMonth} {startYear} - {endMonth} {endYear}
      </p>
    );
  };

  return (
    <div id="work" className="flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col gap-8 lg:w-1/2 lg:pr-12">
        {jobs.map((job) => {
          return (
            <div className="flex flex-col" key={job.id}>
              <div
                onClick={() => handleSelectJob(job)}
                className={cls(
                  selectedJob.id !== job.id && "opacity-20",
                  " flex flex-row relative cursor-pointer items-center"
                )}
              >
                {job?.id === selectedJob?.id ? (
                  <div className="h-4 w-4 bg-transparent ring-2 ring-purple-500 relative">
                    <div className="h-2 w-2 bg-purple-500 absolute top-1 left-1 " />
                  </div>
                ) : (
                  <div className="h-4 w-4 bg-transparent ring-2 ring-neutral-200 relative" />
                )}

                <div className="ml-4 flex flex-row gap-2 items-center">
                  <h1 className="text-lg font-semibold">
                    {job.jobTitle} @{job.company}
                  </h1>
                  &mdash;
                  <p>
                    {getDaysCount(job.startDate, job.endDate, job.stillWorking)}
                  </p>
                  <p>{/* {getPeriod(job.startDate, job.endDate)}{" "} */}</p>
                </div>
              </div>

              {job?.id === selectedJob?.id ? (
                <>
                  <div className="text-sm mt-2 flex flex-col gap-2">
                    {selectedJob?.companyDescription.map((text, index) => {
                      return <p key={index}>{text}</p>;
                    })}
                  </div>
                  <div className="flex flex-row gap-x-4 mt-2 flex-wrap">
                    {selectedJob?.techStack.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row items-center gap-2"
                        >
                          <p className="text-xs">[{tech}]</p>{" "}
                          {index + 1 !== selectedJob?.techStack.length && (
                            <span>&#8226;</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </div>
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
