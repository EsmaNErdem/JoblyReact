import React, {useState, useEffect} from "react";
import JoblyApi from "../api/api";
import Loading from "../utilities/Loading";
import SearchBox from "../utilities/SearchBox"
import CompanyCard from "./CompanyCard";

/**
 * Displays a list of companies and search box.
 * 
 * - API call loads companies data when the component mounts and when the search box is submitted.
 * - This component is designed for the "/companies" route.
 * - Utilizes CompanyCard and SearchBox components and called by Routes
 * - Routes ==> CompanyCard, SearchBox
 * 
 */

const CompanyList = () => {
    const [companies, setCompanies] = useState(null)

      
    // When the component mounts, initiate an API call to load companies
    useEffect(() => {
        getCompanies()
    }, []);
        
    // Retrieves a list of companies from the JoblyApi by sending entered query parameter data.
    // API call is triggered when component mounts and search form submits. 
      const getCompanies = async (data) => {
        try {
            const companies = await JoblyApi.getAllCompanies(data)
            setCompanies(companies)

        } catch (e) {
            console.debug(e)
        }
    }

    if (!companies) return <Loading />

    return (
        <div className="CompanyList">
            <SearchBox search={getCompanies} company={true}/>
            {companies.length ?
                companies.map(company => (
                    <CompanyCard 
                        key = {company.handle}
                        handle = {company.handle}
                        name = {company.name}
                        description = {company.description}
                        logoUrl = {company.logoUrl}
                    />
                )) : 
                <p>Sorry no result found!</p>
            }
        </div>
    )
}

export default CompanyList;