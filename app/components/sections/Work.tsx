"use client";
import { useEffect, useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import { StaggerContainer, StaggerItem } from "@/app/animations/animations";
import { motion } from "framer-motion";
import JobItem from "../JobItem";
import JobDetails from "../JobDetails";
import { scrollToElement } from "@/app/utils/utils";
import useIsMobile from "@/app/utils/use-is-mobile-hook";

const Work = () => {
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);
  const isMobile = useIsMobile();

  const handleSelectJob = (job: JobType) => {
    if (selectedJob?.id === job.id) {
      setSelectedJob(null);
      return;
    }
    setSelectedJob(job);
  };

  useEffect(() => {
    if (!selectedJob || !isMobile) return;
    scrollToElement(selectedJob.id.toString(), true);
  }, [selectedJob, isMobile]);

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
              id={job.id}
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

export default Work;
