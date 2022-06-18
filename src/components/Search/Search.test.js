import { render, screen, waitFor } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  it("should display manager search field", async () => {
    render(<Search />);
    await waitFor(() => {
      screen.getByPlaceholderText("Choose Manager");
    });
  });
});
