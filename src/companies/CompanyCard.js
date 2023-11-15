import { Link } from "react-router-dom";

/**
 * Show short info about a company
 * 
 * - Rendered by CompanyList to display card for each company
 * - CompanyList ==> CompanyCard
 * 
 */

const CompanyCard = ({handle, name, description, logoUrl}) => {

    return (
        <Link to={`/companies/${handle}`} className="CompanyCard">
            <div >
                <h2 data-testid="company-name">
                    {name}
                    {/* {logoUrl && <img alt={name} src={logoUrl}/>} */}
                </h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default CompanyCard;