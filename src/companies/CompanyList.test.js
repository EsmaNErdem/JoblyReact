import { MemoryRouter } from 'react-router-dom';
import { render, waitFor, act } from "@testing-library/react";
import CompanyList from './CompanyList';
import JoblyApi from '../__mocks__/api';
// import "@testing-library/jest-dom/extend-expect"; // Import the toBeVisible matcher


jest.mock('../api');
  

test("renders without crashing", () => {
    render(
    <MemoryRouter >
        <CompanyList />
    </MemoryRouter>
    );
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(
        <MemoryRouter >
            <CompanyList />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test("it renders mock API call and displays data", async () => {
    const mockCompanies = {
        companies: [{
            name: "C1",
            description: "Desc1",
            numEmployees: 1,
            logoUrl: "http://c1.img",
            jobs: [
                { id: 0, title: "J1", equity: "0.1", salary: 1, companyName: "C1" },
                { id: 1, title: "J2", equity: "0.2", salary: 2, companyName: "C1" },
                { id: 2, title: "J3", equity: null, salary: 3, companyName: "C1" },
            ],
        }]
    };

    JoblyApi.getAllCompanies.mockResolvedValueOnce(mockCompanies);

    let getByTestId, queryByTestId;

    await act(async () => {
        ({ getByTestId, queryByTestId } = render(
            <MemoryRouter>
                <CompanyList />
            </MemoryRouter>
        ));
    });

    // Check if loading text is displayed
    expect(getByTestId("loading")).toHaveTextContent("Loading");

    await act(async () => {
        // Wait for the component to render with mock data
        await waitFor(() => {
            expect(queryByTestId("loading")).toBeNull(); // Check if loading text is removed
            expect(queryByTestId("company-card")).toBeInTheDocument(); // Assuming "company-card" is used in CompanyCard component
        });
    });
});