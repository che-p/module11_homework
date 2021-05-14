const { describe, it } = require("@jest/globals");
const getMonth = require("./get_month.js");

describe("Тестирование функции getMonth", () => {
  it("getMonth(5) is a май", () => {
    expect(getMonth(5)).toBe("май");
  }),
    it("getMonth принимает только числа", () => {
      expect(getMonth("5")).toBe("Функция getMonth принимает только числа");
    }),
    it("только от 1 до 12", () => {
      expect(getMonth(13)).toBe("В году 12 месяцев");
    });
});
