import { render } from "@testing-library/react";
import Async from "./Async";

describe("<Async />", () => {
  it("renders h1 title correctly", () => {
    const { getByRole } = render(<Async />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading.textContent).toBe("Async component");
  });

  it("renders fetched list elements", async () => {
    const { findAllByRole } = render(<Async />);
    const listElements = await findAllByRole("listitem");
    expect(listElements.length).toEqual(3);
  });
});
