// __mocks__/Api.js

const JoblyApi = {
    // getAllCompanies: jest.fn(() => Promise.resolve({})),
    getAllCompanies: jest.fn().mockResolvedValue({ companies: [] }),
    // getAllCompanies: jest.fn().mockResolvedValue({ companies: [{
    //   handle: "c1",
    //   name: "C1",
    //   description: "Desc1",
    //   numEmployees: 1,
    //   logoUrl: "http://c1.img",
    //   jobs: [
    //     { id: 1, title: "J1", equity: "0.1", salary: 1, companyName: "C1" },
    //     { id: 2, title: "J2", equity: "0.2", salary: 2, companyName: "C1" },
    //     { id: 3, title: "J3", equity: null, salary: 3, companyName: "C1" },
    //   ],
    // }] }),


    getCompany: jest.fn(() => Promise.resolve({company: {
      handle: "c1",
      name: "C1",
      description: "Desc1",
      numEmployees: 1,
      logoUrl: "http://c1.img",
      jobs: [
        { id: 1, title: "J1", equity: "0.1", salary: 1, companyName: "C1" },
        { id: 2, title: "J2", equity: "0.2", salary: 2, companyName: "C1" },
        { id: 3, title: "J3", equity: null, salary: 3, companyName: "C1" },
      ],
    }})),
    // getCompany: jest.fn().mockResolvedValue({ company: {} }),
    // getCompany: jest.fn(() => Promise.resolve({company: {}})),
    // getCompany: jest.fn(),  


    
  };
  
  export default JoblyApi;