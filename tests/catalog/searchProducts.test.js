const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const foundProducts = searchProducts(products, 'Наушники');
    expect(foundProducts).toHaveLength(1);
    expect(foundProducts[0].id).toEqual(1);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const foundProducts = searchProducts(products, 'Чистый код');
    expect(foundProducts).toHaveLength(1);
    expect(foundProducts[0].id).toEqual(6);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const foundProducts = searchProducts(products, 'Настольная лампа');
    expect(foundProducts).toHaveLength(1);
    expect(foundProducts[0].id).toEqual(4);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const foundProducts = searchProducts(products, 'javascript');
    expect(foundProducts).toHaveLength(1);
    expect(foundProducts[0].id).toEqual(3);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const foundProducts = searchProducts(products, 'ЧЕХОЛ');
    expect(foundProducts).toHaveLength(1);
    expect(foundProducts[0].id).toEqual(5);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const foundProducts = searchProducts(products, 'наушники');
    expect(foundProducts).toHaveLength(1);
    expect(foundProducts[0].id).toEqual(1);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const foundProducts = searchProducts(products, '');
    expect(foundProducts.map((p) => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const foundProducts = searchProducts(products, '     ');
    expect(foundProducts.map((p) => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const foundProducts = searchProducts(products, '\t\n');
    expect(foundProducts.map((p) => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
