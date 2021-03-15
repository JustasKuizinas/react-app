import React from "react";
import { shallow } from "enzyme";
import App from "./App.js";

test("Contains text", () => {
  const app = shallow(<App />);

  expect(app.find("#app").text()).toEqual("Hello");
});
