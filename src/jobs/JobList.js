import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import Loading from "../utilities/Loading";
import SearchBox from "../utilities/SearchBox";
import JobDisplayList from "./JobDisplayList";

/**
 * Display a list of open jobs
 * 
 * - API call loads jobs data when the component mounts and when the search box is submitted.
 * - This component is designed for the "/jobs" route.
 * - Utilizes JobDisplayList with jobs probs and SearchBox components and called by Routes
 * - Routes ==> JobDisplayList, SearchBox
 * 
 */

const JobList = () => {
    const [jobs, setJobs] = useState(null)

    // When the component mounts, initiate an API call to load jobs
    useEffect(() => {
        getJobs();
    }, [])

    // Retrieves a list of jobs from the JoblyApi by sending entered query parameter data.
    // API call is triggered when component mounts and search form submits. 
    const getJobs = async (data) => {
        try {
            const jobs = await JoblyApi.getAllJobs(data)
            setJobs(jobs)
        } catch (e) {
            console.debug(e)
        }
    }

    if (!jobs) return <Loading />

    return (
        <div className="JobList">
            <SearchBox search={getJobs} job={true} />
            {jobs.length ?  
                <JobDisplayList jobs={jobs} /> 
                : 
                <p>Sorry no jobs mathcing!</p>
            }
        </div>
    )
}

export default JobList;