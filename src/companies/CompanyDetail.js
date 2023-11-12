import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utilities/Loading";
import JoblyApi from "../api/api";
import JobDisplayList from "../jobs/JobDisplayList"
/**
 * Displays company detail and open position in the company
 * 
 * - handle data is retrieve from URL parameters routed at /companies/:handle
 * - API call load company data when the component mount or handle changes
 * - Utilizes JobDisplayList to list jobs
 * - Called by the `Routes` component.
 * - Routes ==> JobDisplayList
 * 
 */
const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null)

    // When the component mounts or handle change, initiate an API call to load company
    useEffect(() => {
        const getCompany = async () => {
            try {
                const company = await JoblyApi.getCompany(handle);
                setCompany(company);
            } catch (e) {
                console.debug(e)
            }
        }
        getCompany()
    }, [handle])

    if(!company) return <Loading />;

    return (
        <div className="CompanyDetail">
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <JobDisplayList jobs = {company.jobs}/>
        </div>
    )
}

export default CompanyDetail;