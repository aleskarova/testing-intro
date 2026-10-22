const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProducts = filterByCategory(products, 'all');
    expect(getProductIds(filteredProducts)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const filteredProducts = filterByCategory(products, undefined);
    expect(getProductIds(filteredProducts)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const filteredProducts = filterByCategory(products, '');
    expect(getProductIds(filteredProducts)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filteredProducts = filterByCategory(products, 'electronics');
    expect(getProductIds(filteredProducts)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const filteredProducts = filterByCategory(products, 'books');
    expect(getProductIds(filteredProducts)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const filteredProducts = filterByCategory(products, 'home');
    expect(getProductIds(filteredProducts)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const filteredProducts = filterByCategory(products, 'clothes');
    expect(getProductIds(filteredProducts)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const filteredProducts = filterByCategory(products, 'toys');
    expect(getProductIds(filteredProducts)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const filteredProducts = filterByCategory(products, 'sports');
    expect(getProductIds(filteredProducts)).toEqual([]);
  });
});

function getProductIds(products) {
  return products.map((product) => product.id);
}
