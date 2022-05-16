import { render, screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import FilterForm from "./FilterForm";

describe("filter form", () => {
  test("type in input search & reset it", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <FilterForm />
      </Router>
    );

    // search input
    const input: HTMLInputElement = screen.getByPlaceholderText("Search...");

    // trigger input change
    fireEvent.change(input, {
      target: { value: "JavaScript" },
    });

    // test input val
    expect(input.value).toBe("JavaScript");

    // clear btn
    const btn: HTMLButtonElement = screen.getByText("Reset Filter");
    fireEvent.click(btn);

    // test input val
    expect(input.value).toBe("");
  });
});
