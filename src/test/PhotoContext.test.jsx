import { render, screen, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PhotoProvider, usePhoto } from "../shared/context/PhotoContext";

const TestComponent = () => {
  const { images, loading, searchQuery } = usePhoto();
  return (
    <div>
      <p data-testid="images-count">{images.length}</p>
      <p data-testid="loading">{loading.toString()}</p>
      <p data-testid="query">{searchQuery}</p>
    </div>
  );
};

describe("PhotoContext", () => {
  it("provides default values", () => {
    render(
      <PhotoProvider>
        <TestComponent />
      </PhotoProvider>,
    );
    expect(screen.getByTestId("images-count").textContent).toBe("0");
    expect(screen.getByTestId("loading").textContent).toBe("false");
    expect(screen.getByTestId("query").textContent).toBe("");
  });
});
