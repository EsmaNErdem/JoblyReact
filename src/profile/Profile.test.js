import { render, fireEvent, waitFor } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { UserProvider } from "../testUtils";

jest.mock('../api');

test("renders without crashing", async () => {
    render(
        <UserProvider>
            <ProfileForm />
        </UserProvider>
    ); 
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(
        <UserProvider>
            <ProfileForm />
        </UserProvider>
        );
    expect(asFragment()).toMatchSnapshot();
});

test("LoginForm renders correctly", () => {
    const { getByLabelText, getByText } = render(
        <UserProvider>
            <ProfileForm />
        </UserProvider>
    );
    
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email");
    const saveButton = getByText("Save Changes");
  
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
  
  test("Submitting the form calls login function", async () => {
    const { getByLabelText, getByText } = render(
          <UserProvider >
              <ProfileForm />
          </UserProvider>
      );
    
    const firstNameInput = getByLabelText("First Name");
    const lastNameInput = getByLabelText("Last Name");
    const emailInput = getByLabelText("Email");
    const saveButton = getByText("Save Changes");
  
    fireEvent.change(firstNameInput, { target: { value: "user" } });
    fireEvent.change(lastNameInput, { target: { value: "name" } });
    fireEvent.change(emailInput, { target: { value: "user@email.com" } });
    fireEvent.click(saveButton);

    await waitFor(() => {
        expect(getByText("Updated profile!")).toBeInTheDocument();
    });
  });
   
