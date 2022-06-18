import { render, screen, waitFor } from "@testing-library/react";
import SearchResult from "./SearchResult";

describe("SearchResult Component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should display a manager", async () => {
    const employee = {
      id: "123",
      name: "Harriet McKinney",
      email: "harriet.mckinney@kinetar.com",
      initials: "HM",
    };
    render(
      <SearchResult
        name={employee.name}
        email={employee.email}
        initials={employee.initials}
      />
    );
    await waitFor(() => {
      screen.getByText("Harriet McKinney");
      screen.getByText("harriet.mckinney@kinetar.com");
      screen.getByText("HM");
    });
  });
});
