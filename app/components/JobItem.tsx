import { JobType } from "../utils/jobs";
import { cls } from "../utils/utils";
import FakeCheckbox from "./FakeCheckbox";
import HomeWork from "../content/home-work.mdx";
import Sessions from "../content/sessions.mdx";
import Unclebob from "../content/unclebob.mdx";

type JobItemProps = {
  job: JobType;
  selectedJob: JobType | null;
  handleSelectJob: (job: JobType) => void;
  id: number;
};

const JobItem = (props: JobItemProps) => {
  const { job, selectedJob, handleSelectJob, id } = props;

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

  const jobMDX = () => {
    switch (id) {
      case 1:
        return <Sessions />;
      case 2:
        return <Unclebob />;
      case 3:
        return <HomeWork />;
    }
  };

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleSelectJob(job)}
        className={cls(
          !isSelected && "opacity-20 cursor-pointer hover:opacity-60",
          "flex flex-row relative items-center w-fit"
        )}
        id={id.toString()}
      >
        <FakeCheckbox isEmpty={!isSelected} />
        <div className="ml-4 flex flex-row gap-2 items-center">
          <h1 className="text-lg font-semibold">@{job.company}</h1>
          &mdash;
          <p className="flex-wrap text-sm lg:text-base text-ellipsis">
            {getDaysCount(job.startDate, job.endDate, job.stillWorking)}
          </p>
        </div>
      </div>

      {isSelected ? (
        <>
          <div className="text-sm mt-2 flex flex-col gap-2 animate-fadeInDown">
            {selectedJob?.companyDescription.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
          </div>
          <div className="flex flex-row gap-x-2 mt-2 flex-wrap">
            {selectedJob?.techStack.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 animate-fadeInLeft"
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

      {isSelected && <div className="lg:w-1/2  lg:hidden mt-4">{jobMDX()}</div>}
    </div>
  );
};

export default JobItem;
