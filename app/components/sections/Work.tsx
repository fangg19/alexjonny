"use client";
import { useEffect, useState } from "react";
import { JobType, jobs } from "../../utils/jobs";
import JobItem from "../JobItem";
import { scrollToElement } from "@/app/utils/utils";
import useIsMobile from "@/app/utils/use-is-mobile-hook";
import { jobSectionLabels } from "@/app/utils/constants";
import HomeWork from "@/app/home-work.mdx";
import Sessions from "@/app/sessions.mdx";
import Unclebob from "@/app/unclebob.mdx";

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
    const diffToScroll = selectedJob?.id * 65 + 80;
    scrollToElement(selectedJob.id.toString(), true, diffToScroll);
  }, [selectedJob, isMobile]);

  const labelText =
    selectedJob?.id !== jobs[0].id && selectedJob?.id !== jobs[1].id
      ? jobSectionLabels.default
      : selectedJob?.id === jobs[0].id
      ? jobSectionLabels.current
      : jobSectionLabels.past;

  const jobMDX = () => {
    switch (selectedJob?.id) {
      case 1:
        return <Sessions />;
      case 2:
        return <Unclebob />;
      case 3:
        return <HomeWork />;
    }
  };

  return (
    <div id="work" className="flex flex-col w-full gap-2 mb-12 lg:mb-0">
      <h1 className="text-xl font-bold  text-neutral-600 animate-fadeInLeft">
        {labelText}
      </h1>

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

        <div className="lg:w-1/2 hidden lg:block">{jobMDX()}</div>
      </div>
    </div>
  );
};

export default Work;
