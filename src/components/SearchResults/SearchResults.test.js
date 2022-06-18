import { render, screen, waitFor } from "@testing-library/react";
import * as api from "../../api";
import SearchResults from "./SearchResults";

jest.mock("../../api");

describe("SearchResults Component", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should display list of managers in search", async () => {
    const employees = [
      {
        id: "123",
        name: "Harriet McKinney",
        email: "harriet.mckinney@kinetar.com",
        initials: "HM",
      },
      {
        id: "456",
        name: "New Manager",
        email: "new.manager@kinetar.com",
        initials: "NM",
      },
    ];
    render(<SearchResults employees={employees} />);
    await waitFor(() => {
      screen.getByText("Harriet McKinney");
    });
  });
});
