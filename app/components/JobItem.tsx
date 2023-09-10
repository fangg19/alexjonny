import React from "react";
import { JobType } from "../utils/jobs";
import { cls } from "../utils/utils";
import FakeCheckbox from "./FakeCheckbox";
import JobDetails from "./JobDetails";

type JobItemProps = {
  job: JobType;
  selectedJob: JobType | null;
  handleSelectJob: (job: JobType) => void;
};

const JobItem = (props: JobItemProps) => {
  const { job, selectedJob, handleSelectJob } = props;

  const isSelected = selectedJob?.id === job?.id;

  const getDaysCount = (
    startDate: Date,
    endDate: Date,
    stillWorking: boolean
  ) => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return stillWorking ? `${diffDays} days and counting` : `${diffDays} days`;
  };

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleSelectJob(job)}
        className={cls(
          !isSelected && "opacity-20 cursor-pointer",
          "flex flex-row relative items-center w-fit"
        )}
      >
        <FakeCheckbox isEmpty={!isSelected} />
        <div className="ml-4 flex flex-row gap-2 items-center">
          <h1 className="text-lg font-semibold">
            {job.jobTitle} @{job.company}
          </h1>
          &mdash;
          <p className="flex-wrap">
            {getDaysCount(job.startDate, job.endDate, job.stillWorking)}
          </p>
        </div>
      </div>

      {isSelected ? (
        <>
          <div className="text-sm mt-2 flex flex-col gap-2">
            {selectedJob?.companyDescription.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
          </div>
          <div className="flex flex-row gap-x-4 mt-2 flex-wrap">
            {selectedJob?.techStack.map((tech, index) => {
              return (
                <div key={index} className="flex flex-row items-center gap-2">
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

      {isSelected && (
        <div className="lg:w-1/2  lg:hidden mt-4">
          {selectedJob?.content?.map((job, index) => {
            return (
              <div key={index + 2} className="mb-6">
                <JobDetails job={job} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobItem;
