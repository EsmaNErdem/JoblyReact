import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitFor, act } from "@testing-library/react";
import CompanyDetail from './CompanyDetail';
import JoblyApi from '../__mocks__/api';

jest.mock('../api');
afterEach(cleanup);

test("renders without crashing", async () => {
    await act(async () => {
        render(
            <MemoryRouter >
                <CompanyDetail />
            </MemoryRouter>
            );
    });        
});

test("it renders and matches with snaphot", async () => {
    await act(async () => {
        ({ asFragment } = render(
            <MemoryRouter >
                <CompanyDetail />
            </MemoryRouter>
        ))
    });
    expect(asFragment()).toMatchSnapshot();
});

// test("it renders mock API call and displays data", async () => {
//     JoblyApi.getCompany.mockResolvedValueOnce({ company: {
//       name: "C1",
//       description: "Desc1",
//       numEmployees: 1,
//       logoUrl: "http://c1.img",
//       jobs: [
//         { id: 0, title: "J1", equity: "0.1", salary: 1, companyName: "C1" },
//         { id: 1, title: "J2", equity: "0.2", salary: 2, companyName: "C1" },
//         { id: 2, title: "J3", equity: null, salary: 3, companyName: "C1" },
//       ],
//     }});
//     const mockHandle = "c1"

//     await act(async () => {
//         ({ getByTestId } = render(
//             <MemoryRouter initialEntries={[`/companies/${mockHandle}`]}>
//                 <UserProvider>
//                     <CompanyDetail />
//                 </UserProvider>
//             </MemoryRouter>
//         ));
//     });

//     // const { getByTestId } = render(
//     //     <MemoryRouter initialEntries={[`/companies/${mockHandle}`]}>
//     //         <CompanyDetail />
//     //     </MemoryRouter>
//     // );
  
//     // expect(getByTestId("loading")).toHaveTextContent("Loading");
  
//     // You can also use act to wait for the asynchronous operations to complete
//     await waitFor(() => {
//       // Your assertion related to the API call
//       expect(getByTestId("company-name")).toHaveTextContent("C1");
//       expect(JoblyApi.getCompany).toHaveBeenCalledTimes(1);
//     });
  
//   });