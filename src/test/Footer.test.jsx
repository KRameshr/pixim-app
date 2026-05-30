import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../shared/components/Footer";

describe("Footer Component", () => {
  it("renders PIXIM brand name", () => {
    render(<Footer />);
    expect(screen.getByText("PIXIM")).toBeInTheDocument();
  });

  it("renders Unsplash API link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /unsplash api/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://unsplash.com");
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 PIXIM/i)).toBeInTheDocument();
  });
});
