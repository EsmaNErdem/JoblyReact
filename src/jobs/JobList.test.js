import { MemoryRouter } from 'react-router-dom';
import { render, act, waitFor, screen } from "@testing-library/react";
import JobList from './JobList';
import JoblyApi from '../__mocks__/api';


jest.mock('../api');
  
test("renders without crashing", async () => {
    await act(async () => {render(<JobList />)});        
});

test("it renders and matches with snaphot", async () => {
    await act(async () => {
        ({ asFragment } = render(<JobList />))
    });
    expect(asFragment()).toMatchSnapshot();
});


test("Display job data", async () => {
    const mockJobs = {
        jobs: [
            {
              id: 1,
              title: "J1",
              salary: 1,
              equity: "0.1",
              companyHandle: "c1",
              companyName: "C1",
            },
            {
              id: 2,
              title: "J2",
              salary: 2,
              equity: "0.2",
              companyHandle: "c1",
              companyName: "C1",
            },
          ]
    };

    // console.log(JoblyApi.getAllJobs.mockResolvedValueOnce(mockJobs))
    JoblyApi.getAllJobs.mockResolvedValueOnce(() => Promise.resolve(mockJobs))
    await act(async () => {
        ({ getByLabelText, getByText, rerender } = render(
            <MemoryRouter >
                <JobList />
            </MemoryRouter>
        ));
    });
    // rerender(
    //     <MemoryRouter >
    //             <JobList />
    //         </MemoryRouter>
    // )
    // Use waitFor to wait for the element to be available
    await waitFor(() => {
        console.log(JoblyApi.getAllJobs.mock.calls);
        
        // expect(screen.getByText('J1')).toBeInTheDocument();
    });
});
