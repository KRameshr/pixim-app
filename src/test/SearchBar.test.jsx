import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../features/search/components/SearchBar";
import { PhotoProvider } from "../shared/context/PhotoContext";

const Wrapper = ({ children }) => (
  <PhotoProvider>
    <MemoryRouter>{children}</MemoryRouter>
  </PhotoProvider>
);

describe("SearchBar Component", () => {
  it("renders search input correctly", () => {
    render(<SearchBar />, { wrapper: Wrapper });
    expect(
      screen.getByPlaceholderText("Search for photos..."),
    ).toBeInTheDocument();
  });

  it("renders search button", () => {
    render(<SearchBar />, { wrapper: Wrapper });
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("updates input value when typing", async () => {
    render(<SearchBar />, { wrapper: Wrapper });
    const input = screen.getByPlaceholderText("Search for photos...");
    fireEvent.change(input, { target: { value: "nature" } });
    expect(input.value).toBe("nature");
  });

  it("shows clear button when input has value", () => {
    render(<SearchBar />, { wrapper: Wrapper });
    const input = screen.getByPlaceholderText("Search for photos...");
    fireEvent.change(input, { target: { value: "nature" } });
    const clearBtn = screen.getByRole("button", { name: "" });
    expect(clearBtn).toBeInTheDocument();
  });

  it("clears input when clear button clicked", () => {
    render(<SearchBar />, { wrapper: Wrapper });
    const input = screen.getByPlaceholderText("Search for photos...");
    fireEvent.change(input, { target: { value: "nature" } });
    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(input.value).toBe("");
  });

  it("shows suggestions on focus", () => {
    render(<SearchBar />, { wrapper: Wrapper });
    const input = screen.getByPlaceholderText("Search for photos...");
    fireEvent.focus(input);
    expect(screen.getByText("Popular Searches")).toBeInTheDocument();
  });
});
