import { render, screen } from "@testing-library/react";
import Elements from "./Elements";

describe("<Elements />", () => {
  it("renders 3 list elements", () => {
    const { getAllByRole } = render(<Elements />);
    const linkElements = getAllByRole("listitem");
    expect(linkElements.length).toEqual(3);
  });

  it("renders h1 tag", () => {
    const { getByTestId } = render(<Elements />);
    const h1tag = getByTestId("heading1");
    expect(h1tag).toBeInTheDocument();
  });

  it("span displays five", () => {
    const { getByTitle } = render(<Elements />);
    const span = getByTitle("span");
    expect(span.textContent).toBe(String(5));
  });
});
