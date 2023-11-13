import JoblyApi from "../api/api";

/**
 * Show short info about a job
 * 
 * - Rendered by JobDisplayList to display card for eacj job
 * - Utilizes job application for user and updates button 
 * JobDisplayList ==> JobCard
 * 
 */

const JobCard = ({ id, title, salary, equity, company }) => {
    
    // Send application with username and job id and updates user's applicationId state
    const  apply = async (username) => {
        try{
            const appliedJobId = await JoblyApi.sendUserAplication(username, id)
            // setApplicationIds(new Set([...applicationIds, id]))
        } catch (e) {
            console.debug(e)
        }
    }

    return (
        <div className="JobCard">
            <h2>{title}</h2>
            <h3>{company}</h3>
            {salary && <p>Salary: ${addCommas(salary)}</p>}
            {equity && <p>Equity: {equity}</p>}
            <button onClick={apply}> { /*applicationIds.has(id) ? "APPLIED" : "APPLY"*/}apply </button>
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