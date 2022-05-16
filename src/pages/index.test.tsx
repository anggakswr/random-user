import { render, screen, act } from "@testing-library/react";
import Index from ".";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import axios from "axios";

jest.mock("axios");

describe("index page", () => {
  test("renders loading skeletons & API data", async () => {
    // render component
    // (Router is necessary so that the test
    // will not throw an error)

    // mock axios fetch
    const results = [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Rogér",
          last: "Te Velde",
        },
        email: "roger.tevelde@example.com",
        login: {
          uuid: "cb21ff70-72b8-42e5-bf2a-4c2a05c2954d",
          username: "bluemouse359",
          password: "wing",
          salt: "CkRIj5wC",
          md5: "3f2941bdc57ecf58ba33fde1fe26a63e",
          sha1: "77adcd055548e9c1b7732e65c0ca7d661fcc5edc",
          sha256:
            "6469147c6992877699965be49a2c15a232a61453895d334c3cf13eb98d477f59",
        },
        registered: {
          date: "2005-05-07T10:51:17.572Z",
          age: 17,
        },
      },
    ];

    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const promise = Promise.resolve({ data: { results } });

    mockedAxios.get.mockImplementationOnce(() => promise);

    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Index />
      </Router>
    );

    // before fetch
    screen.getAllByTestId("loading");

    // after fetch
    // @ts-ignore
    await act(() => promise);

    // loading skeletons gone
    const loadingSkeletons = screen.queryByTestId("loading");
    expect(loadingSkeletons).toBeNull();

    // data appear
    const tblRows = await screen.findAllByTestId("tbl-row");
    expect(tblRows).toHaveLength(1);
  });
});
