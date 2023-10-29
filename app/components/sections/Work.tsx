"use client";
import { useEffect, useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import {
  FadeInLeft,
  StaggerContainer,
  StaggerItem,
} from "@/app/animations/animations";
import { motion } from "framer-motion";
import JobItem from "../JobItem";
import JobDetails from "../JobDetails";
import { scrollToElement } from "@/app/utils/utils";
import useIsMobile from "@/app/utils/use-is-mobile-hook";
import { jobSectionLabels } from "@/app/utils/constants";
import Job from "../../content/HomeWork.mdx";
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

  console.log("selectedJob", selectedJob);
  useEffect(() => {
    if (!selectedJob || !isMobile) return;
    const diffToScroll = selectedJob?.id * 45 + 40;
    scrollToElement(selectedJob.id.toString(), true, diffToScroll);
  }, [selectedJob, isMobile]);

  const labelText =
    selectedJob?.id !== jobs[0].id && selectedJob?.id !== jobs[1].id
      ? jobSectionLabels.default
      : selectedJob?.id === jobs[0].id
      ? jobSectionLabels.current
      : jobSectionLabels.past;

  const jobMDX = () => {
    return jobs[selectedJob?.id ?? 2]?.jobMdx;
  };

  console.log("jobMDX", jobMDX());

  return (
    <div id="work" className="flex flex-col w-full gap-2 mb-12 lg:mb-0">
      <motion.h1
        variants={FadeInLeft}
        initial="hidden"
        animate="visible"
        className="text-xl font-bold  text-neutral-600"
        key={labelText}
      >
        {labelText}
      </motion.h1>
      <div className="w-full h-[2px] bg-neutral-800 mb-6" />

      <div className="flex flex-col lg:flex-row justify-between w-full">
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
          {selectedJob ? selectedJob?.jobMdx?.() : null}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
