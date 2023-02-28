import List from "./List";
import { render } from "@testing-library/react";

describe("<List />", () => {
  const exampleListItems = ["Banana", "Plum", "Orange"];

  it("there is correct amount of list items", () => {
    const { getAllByRole } = render(<List listItems={exampleListItems} />);
    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });

  it("all list items are rendered as li elements", () => {
    const { getAllByRole } = render(<List listItems={exampleListItems} />);
    const listItems = getAllByRole("listitem");
    listItems.forEach((item, index) =>
      expect(item.textContent).toEqual(exampleListItems[index])
    );
  });
});
