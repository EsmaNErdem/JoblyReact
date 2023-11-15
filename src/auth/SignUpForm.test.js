import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import SignUpForm from "./SignUpForm";

test("renders without crashing", async () => {
    render(<SignUpForm />); 
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<SignUpForm />);
    expect(asFragment()).toMatchSnapshot();
});

test("SignUpForm renders correctly", () => {
    const { getByLabelText, getByText } = render(<SignUpForm />);
    
    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email");
    const submitButton = getByText("Submit");
  
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  
  test("Submitting the form calls signup function", () => {
    const mockSignUp = jest.fn().mockResolvedValue({ success: true }); // Mock login function
    const { getByLabelText, getByText } = render(
          <MemoryRouter >
              <SignUpForm signup={mockSignUp} />
          </MemoryRouter>
      );
    
    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email");
      const submitButton = getByText("Submit");
  
    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: 123456789 } });
    fireEvent.change(firstNameInput, { target: { value: "user" } });
    fireEvent.change(lastNameInput, { target: { value: "name" } });
    fireEvent.change(emailInput, { target: { value: "user@email.com" } });
    fireEvent.click(submitButton);
  
    expect(mockSignUp).toHaveBeenCalledWith({
      username: "username",
      password: "123456789",
      firstName: "user",
      lastName: "name",
      email: "user@email.com"
    });
  });
   
