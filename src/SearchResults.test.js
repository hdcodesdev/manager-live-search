import { render, screen, waitFor } from "@testing-library/react";
import * as api from "./api";
import SearchResult from "./SearchResult";

jest.mock("./api");

describe("EmployeesList Component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should display an employee", async () => {
    const employee = {
      id: "123",
      name: "Harriet McKinney",
      email: "harriet.mckinney@kinetar.com",
      initials: "HM",
    };

    render(
      <SearchResult
        initials={employee.initials}
        name={employee.name}
        email={employee.email}
      />
    );
    await waitFor(() => {
      screen.getByText("Harriet McKinney");
    });
  });
});
