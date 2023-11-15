import { render, cleanup, waitFor, act } from "@testing-library/react";
import JobCard from './JobCard';
import { UserProvider } from "../testUtils";

test("renders without crashing", () => {
    render(
    <UserProvider>
        <JobCard 
            id={1}
            title="job"
            salary={10000}
            equity={0.2} 
            company="C1" 
        />
    </UserProvider>
    );
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(
        <UserProvider>
            <JobCard 
                id={1}
                title="job"
                salary={10000}
                equity={0.2} 
                company="C1" 
            />
        </UserProvider>
    );
    expect(asFragment()).toMatchSnapshot();
});

test("Display job data", () => {
    const { getByTestId } = render(
        <UserProvider>
            <JobCard 
                id={1}
                title="job"
                salary={10000}
                equity={0.2} 
                company="C1" 
            />
        </UserProvider>
        );
    
    expect(getByTestId("job-title")).toHaveTextContent("job");
    expect(getByTestId("company-name")).toHaveTextContent("C1");

});

