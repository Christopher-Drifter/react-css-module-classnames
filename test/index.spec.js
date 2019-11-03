import { expect } from "chai";
import classNames from "../src/index";

describe("index test", () => {
  describe("classNames(name, styles)", () => {
    it("should return `testname module-testname`", () => {
      const { className } = classNames("testname", {
        testname: "module-testname"
      });
      expect(className).to.equal("testname module-testname");
    });
  });

  describe("classNames(classNameObject)", () => {
    it("should return `testname`", () => {
      const { className } = classNames(classNames("testname"));
      expect(className).to.equal("testname");
    });
  });

  describe("classNames(string1, string2, string3)", () => {
    it("should return `string1 string2 string3`", () => {
      const { className } = classNames("string1", "string2", "string3");
      expect(className).to.equal("string1 string2 string3");
    });
  });

  describe("classNames(classNameObject1, string2, classNameObject3, string4)", () => {
    it("should return `string1 string2 string3 string4`", () => {
      const { className } = classNames(
        classNames("string1"),
        "string2",
        classNames("string3"),
        "string4"
      );
      expect(className).to.equal("string1 string2 string3 string4");
    });
  });

  describe("classNames(...).plus(...)", () => {
    it("should return `string1 string2 string3`", () => {
      const { className } = classNames("string1", "string2").plus("string3");
      expect(className).to.equal("string1 string2 string3");
    });
  });
});
