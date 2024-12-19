const weekFn = require("../week");

test("Тест 1: WeekFn(1) повинно повернути 'Понеділок'", () => {
    expect(weekFn(1)).toBe('Понеділок');
});

test("Тест 2: WeekFn(3) повинно повернути 'Середа'", () => {
    expect(weekFn(3)).toBe('Середа');
});

test("Тест 3: WeekFn(7) повинно повернути 'Неділя'", () => {
    expect(weekFn(7)).toBe('Неділя');
});

test("Тест 4: WeekFn(9) повинно повернути null", () => {
    expect(weekFn(9)).toBe(null);
});

test("Тест 4: WeekFn(9) повинно повернути null", () => {
    expect(weekFn(9)).toBe(null);
});

test("Тест 4: WeekFn(9) повинно повернути null", () => {
    expect(weekFn(9)).toBe(null);
});

