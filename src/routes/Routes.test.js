import { render, cleanup } from "@testing-library/react";
import Routes from "./Routes";
import { MemoryRouter } from "react-router";
import { UserProvider, NonUserProvider } from "../testUtils";

jest.mock('../api');
afterEach(cleanup);

test("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </MemoryRouter>,
  );
});

test("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <NonUserProvider>
          <Routes />
        </NonUserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
