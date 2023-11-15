import React, { useContext, useState, useEffect } from "react";
import UserContext from "../auth/UserContext";

/**
 * Show short info about a job
 * 
 * - Rendered by JobDisplayList to display card for eacj job
 * - Utilizes job application for user and updates button 
 * JobDisplayList ==> JobCard
 * 
 */

const JobCard = ({ id, title, salary, equity, company }) => {
    const { hasApplied, applyJob } = useContext(UserContext);
    const [applied, setApplied] = useState()

    /**By using the useEffect, the applied status is only recalculated when the id or the hasAppliedToJob function changes, avoiding unnecessary recalculations on every render.  */
    useEffect(() => {
        console.debug("JobCard useEffect, id=", id)

        setApplied(hasApplied(id))
    }, [id, hasApplied])

    const handleApply = () =>{
        if(hasApplied(id)) return
        applyJob(id)
        setApplied(true)
    }

    return (
        <div className="JobCard">
            <h2>{title}</h2>
            <h3>{company}</h3>
            {salary && <p>Salary: ${addCommas(salary)}</p>}
            {equity && <p>Equity: {equity}</p>}
            <button 
                onClick={handleApply}
                disabled={applied}
            > 
                { applied ? "APPLIED" : "APPLY"}
            </button>
        </div>
    )
}

function addCommas(salary) {
    let digitsRev = "";
    const salaryStr = salary.toString();
  
    for (let i = salaryStr.length - 1; i >= 0; i--) {
      digitsRev = salaryStr[i] + digitsRev
      if (i > 0 && i % 3 === 0) digitsRev = "," + digitsRev
    }
  
    return digitsRev
}

export default JobCard;