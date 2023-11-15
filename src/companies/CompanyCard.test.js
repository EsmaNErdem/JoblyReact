import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="test"
            name="Test"
            description="testing 1, 2, 3..."
            logo_url=""
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="test"
            name="Test"
            description="testing 1, 2, 3..."
            logo_url=""
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
