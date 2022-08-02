import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import LoginAdmin from "./loginAdmin";
import BusinessDetails from "./businessDetails";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock("./businessDetails", () => {
  return function DummyMap(props) {
    return (
      <div data-testid="businessDetails">
        {props.id}
      </div>
    );
  };
});

it("should render loginAdmin information", async() => {
  const fakeUser = {
    username: "tamarEsty",
    password: "e123t123",
    id: "af5987a3-bd78-4d52-9121-da80cbbe6c3b"
  };

  jest.spyOn(global, "axios.post").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    render(<LoginAdmin adminId={fakeUser} />, container);
  });

  expect(
    container.querySelector("[data-testid='businessDetails']").innerHTML
  ).toEqual("22996bff-dd6b-44b3-bac2-dadbef9d4a94");

  // expect(
  //   container.querySelector('[data-testid="site"]').getAttribute("href")
  // ).toEqual("http://test.com");

  // expect(container.querySelector('[data-testid="map"]').textContent).toEqual(
  //   "0:0"
  // );
});