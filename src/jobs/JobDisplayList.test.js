import { render } from "@testing-library/react";
import JobDisplayList from './JobDisplayList';
import { UserProvider } from "../testUtils";

const jobs = [
    { id: 1, title: "J1", equity: "0.1", salary: 1, companyName: "C1" },
    { id: 2, title: "J2", equity: "0.2", salary: 2, companyName: "C2" },
    { id: 3, title: "J3", equity: null, salary: 300000, companyName: "C1" },
  ];

test("renders without crashing", () => {
    render(
        <UserProvider>
                <JobDisplayList jobs={jobs} />
        </UserProvider>
    );
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(
        <UserProvider>
                <JobDisplayList jobs={jobs} />
        </UserProvider>
    );
    expect(asFragment()).toMatchSnapshot();
});

test("Display job data", () => {
    const { getByText } = render(
        <UserProvider>
                <JobDisplayList jobs={jobs} />
        </UserProvider>
        );
    
    expect(getByText("J1")).toBeInTheDocument()
    expect(getByText("C2")).toBeInTheDocument()
    expect(getByText("Salary: $300,000")).toBeInTheDocument()
});
