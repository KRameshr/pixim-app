import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NoImages from "../features/gallery/components/NoImages";

describe("NoImages Component", () => {
  it("renders no images found message", () => {
    render(
      <MemoryRouter>
        <NoImages query="" />
      </MemoryRouter>,
    );
    expect(screen.getByText("No images found")).toBeInTheDocument();
  });

  it("shows query in message when query provided", () => {
    render(
      <MemoryRouter>
        <NoImages query="cars" />
      </MemoryRouter>,
    );
    expect(screen.getByText(/cars/i)).toBeInTheDocument();
  });

  it("shows search suggestion text", () => {
    render(
      <MemoryRouter>
        <NoImages query="" />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Nature, City, Travel, Food/i)).toBeInTheDocument();
  });
});
