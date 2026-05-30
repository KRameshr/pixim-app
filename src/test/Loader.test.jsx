import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Loader from "../shared/components/Loader";

describe("Loader Component", () => {
  it("renders loading text", () => {
    render(<Loader />);
    expect(screen.getByText("Finding beautiful photos...")).toBeInTheDocument();
  });

  it("renders spinner element", () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
