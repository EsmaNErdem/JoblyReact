import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import LoginForm from "./LoginForm"

test("renders without crashing", async () => {
    render(<LoginForm />); 
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
});

test("LoginForm renders correctly", () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    
    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const submitButton = getByText("Submit");
  
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  
  test("Submitting the form calls login function", () => {
    const mockLogin = jest.fn().mockResolvedValue({ success: true }); // Mock login function
    const { getByLabelText, getByText } = render(
          <MemoryRouter >
              <LoginForm login={mockLogin} />
          </MemoryRouter>
      );
    
    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const submitButton = getByText("Submit");
  
    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: 123456789 } });
    fireEvent.click(submitButton);
  
    expect(mockLogin).toHaveBeenCalledWith({
      username: "username",
      password: "123456789"
    });
  });
   
