import React from "react";
import { JobType } from "../utils/jobs";
import { motion } from "framer-motion";
import { FadeInRight } from "../animations/animations";

type JobDetailsProps = {
  job: JobType["content"][0];
};

const JobDetails = (props: JobDetailsProps) => {
  const { job } = props;

  return (
    <div>
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
};

export default JobDetails;
