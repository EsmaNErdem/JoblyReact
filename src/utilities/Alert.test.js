import { render } from "@testing-library/react";
import Alert from "./Alert";

test("renders without crashing", async () => {
    render(<Alert />); 
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<Alert type="success" messages={["Test-success"]} />);
    expect(asFragment()).toMatchSnapshot();
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<Alert type="danger" messages={["Test-danger"]} />);
    expect(asFragment()).toMatchSnapshot();
});


test("it renders alert with success class", () => {
    const { getByText } = render(<Alert type="success" messages={["Test-success"]} />);
    const alertElement = getByText("Test-success").parentElement;
    expect(alertElement).toHaveClass("Alert-success");
});

test("it renders alert with danger class", () => {
    const { getByText } = render(<Alert type="danger" messages={["Test-danger"]} />);
    const alertElement = getByText("Test-danger").parentElement;
    expect(alertElement).toHaveClass("Alert-danger");
});

