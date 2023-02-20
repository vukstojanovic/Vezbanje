import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialValue={0} />);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual(String(0));
  });

  it("button increases count by one on click", () => {
    const { getByRole, getByTestId } = render(<Counter initialValue={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("button decreases count by one on click", () => {
    const { getByRole, getByTestId } = render(<Counter initialValue={3} />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(2);
  });

  it("button reverts count to initial value", () => {
    const { getByRole, getByTestId } = render(<Counter initialValue={5} />);
    const restartBtn = getByRole("button", { name: "Restart" });
    const decrementBtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    fireEvent.click(restartBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(5);
  });

  it("button switches from positive to negative and vice versa", () => {
    const { getByTestId, getByRole } = render(<Counter initialValue={3} />);
    const switchBtn = getByRole("button", { name: "Switch Signs" });
    fireEvent.click(switchBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-3);
  });
});
