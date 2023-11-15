import { render, fireEvent } from "@testing-library/react";
import SearchBox from "./SearchBox"


test("renders without crashing", async () => {
    render(<SearchBox />); 
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(
        <SearchBox 
            company={true}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});


test("it renders and matches with snaphot", () => {
    const { asFragment } = render(
        <SearchBox 
            job={true}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

test("it renders with company name, min and max employees inputs", () => {
    const { getByText } = render(
        <SearchBox 
            company={true}
        />
    );
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Min Employees")).toBeInTheDocument();
    expect(getByText("Max Employees")).toBeInTheDocument();
});

test("it renders with company name, min and max employees inputs", () => {
    const { getByText } = render(
        <SearchBox 
            job={true}
        />
    );
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Min Salary")).toBeInTheDocument();
    expect(getByText("Has Equity")).toBeInTheDocument();
});


test("it submits form", () => {
    const mockSearch = jest.fn().mockResolvedValue({});
    const { getByLabelText, getByText } = render(
        <SearchBox 
            company={true}
            search={mockSearch}
        />
    );
    const nameInput = getByLabelText("Name");
    const minEmployeeInput = getByLabelText("Min Employees");
    const maxEmployeeInput = getByLabelText("Max Employees");
    const searchButton = getByText("Search")

    fireEvent.change(nameInput, { target: { value: "C1" } });
    fireEvent.change(minEmployeeInput, { target: { value: 100 } });
    fireEvent.change(maxEmployeeInput, { target: { value: 500 } });
    fireEvent.click(searchButton);
  
    expect(mockSearch).toHaveBeenCalledWith({
      name: "C1",
      minEmployees: "100",
      maxEmployees: "500"
    });  
});
