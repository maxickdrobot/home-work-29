const ageClassification = require("../age");

test("Від'ємний вік повертає null", () => {
    expect(ageClassification(-1)).toBe(null);
});

test("Вік 0 повертає null", () => {
    expect(ageClassification(0)).toBe(null);
});

test("Вік 1 класифікується як 'Дитинство'", () => {
    expect(ageClassification(1)).toBe("Дитинство");
});

test("Вік 24 класифікується як 'Дитинство'", () => {
    expect(ageClassification(24)).toBe("Дитинство");
});

test("Вік 24.01 класифікується як 'Молодість'", () => {
    expect(ageClassification(24.01)).toBe("Молодість");
});

test("Вік 44 класифікується як 'Молодість'", () => {
    expect(ageClassification(44)).toBe("Молодість");
});

test("Вік 44.01 класифікується як 'Зрілість'", () => {
    expect(ageClassification(44.01)).toBe("Зрілість");
});

test("Вік 65 класифікується як 'Зрілість'", () => {
    expect(ageClassification(65)).toBe("Зрілість");
});

test("Вік 65.01 класифікується як 'Старість'", () => {
    expect(ageClassification(65.01)).toBe("Старість");
});

test("Вік 75 класифікується як 'Старість'", () => {
    expect(ageClassification(75)).toBe("Старість");
});

test("Вік 75.01 класифікується як 'Довголіття'", () => {
    expect(ageClassification(75.01)).toBe("Довголіття");
});

test("Вік 90 класифікується як 'Довголіття'", () => {
    expect(ageClassification(90)).toBe("Довголіття");
});

test("Вік 90.01 класифікується як 'Рекорд'", () => {
    expect(ageClassification(90.01)).toBe("Рекорд");
});

test("Вік 122 класифікується як 'Рекорд'", () => {
    expect(ageClassification(122)).toBe("Рекорд");
});

test("Вік 122.01 повертає null", () => {
    expect(ageClassification(122.01)).toBe(null);
});

test("Вік 150 повертає null", () => {
    expect(ageClassification(150)).toBe(null);
});
