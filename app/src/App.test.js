import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  let component;

  it("should render correctly", () => {
    component = mount(<App />);
  });

  describe("first step", () => {
    it("should render all inputs", () => {
      expect(component.find("#first-name").exists()).toEqual(true);
      expect(component.find("#last-name").exists()).toEqual(true);
      expect(component.find("#email").exists()).toEqual(true);
    });

    it("should inputs required", () => {
      expect(
        component
          .find("#first-name")
          .at(0)
          .props()["required"]
      ).toBe(true);
      expect(
        component
          .find("#last-name")
          .at(0)
          .props()["required"]
      ).toBe(true);
      expect(
        component
          .find("#email")
          .at(0)
          .props()["required"]
      ).toBe(true);
    });
  });

  describe("Second step", () => {
    it("should render all inputs", () => {
      expect(component.find("#mobile-number").exists()).toEqual(true);
      expect(component.find("#gender").exists()).toEqual(true);
      expect(component.find("#day-birth").exists()).toEqual(true);
      expect(component.find("#month-birth").exists()).toEqual(true);
      expect(component.find("#year-birth").exists()).toEqual(true);
    });
  });

  describe("Third step", () => {
    it("should render all inputs", () => {
      expect(component.find("#comments").exists()).toEqual(true);
    });
  });
});
