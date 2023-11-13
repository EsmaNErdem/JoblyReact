import JobCard from "./JobCard";

/**
 * Displays list of job cards.
 * 
 * - Called by both JobList and CompanyDetail to list jobs.
 *  JobList ==> JobCardList ==> JobCard
 *  CompanyDetail ==> JobCardList ==> JobCard
 *
 */

const JobDisplayList = ({ jobs }) => {
    return (
        <div className="JobDisplayList">
            {jobs.map(job => (
                <JobCard 
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    company={job.companyName}
                />
            ))}
        </div>
    )

}

export default JobDisplayList