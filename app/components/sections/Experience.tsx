"use client";
import { useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import { cls } from "../../utils/utils";
import {
  HeaderVariant,
  StaggerContainer,
  StaggerItem,
} from "@/app/animations/animations";
import { motion } from "framer-motion";
import FakeCheckbox from "../FakeCheckbox";
import JobItem from "../JobItem";
import JobDetails from "../JobDetails";

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

      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        animate="visible"
        className="lg:w-1/2 hidden lg:block"
        key={selectedJob?.id}
      >
        {selectedJob?.content?.map((job, index) => {
          return (
            <motion.div
              variants={StaggerItem}
              key={job?.title}
              className="mb-6"
            >
              <JobDetails job={job} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
