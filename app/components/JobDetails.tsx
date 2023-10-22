import { JobType } from "../utils/jobs";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../animations/animations";

type JobDetailsProps = {
  job: JobType["jobDetails"][0];
};

const JobDetails = (props: JobDetailsProps) => {
  const { job } = props;
  return (
    <div itemType="https://schema.org/Organization">
      {job?.url ? (
        <a
          itemProp="url"
          href={job?.url}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <h2 className="font-bold text-lg mb-2 underline underline-offset-2">
            {job.title} &#8599;
          </h2>
        </a>
      ) : (
        <h2 className="font-bold text-lg mb-2 mt-4">{job.title}</h2>
      )}

      {job.description.map((details, index) => {
        return (
          <motion.div key={index + 1} variants={StaggerContainer}>
            <div key={index + 2} className="pl-4">
              &gt; {details.primaryText}
            </div>
            <div>
              {details.secondaryText.map((text, index) => {
                return (
                  <motion.div
                    variants={StaggerItem}
                    key={index + 3}
                    className="pl-8"
                  >
                    &#8226; {text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default JobDetails;
