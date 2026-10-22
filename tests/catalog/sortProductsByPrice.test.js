const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

const getProductsByIds = (ids) => {
  return ids.map((id) => products.find((p) => p.id == id));
};

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sorted = sortProductsByPrice(products, 'asc');
    expect(sorted.map((p) => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sorted = sortProductsByPrice(products);
    expect(sorted.map((p) => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const toSort = getProductsByIds([1, 3, 4]);
    const sorted = sortProductsByPrice(toSort, 'asc');
    expect(sorted.map((p) => p.id)).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sorted = sortProductsByPrice(products, 'desc');
    expect(sorted.map((p) => p.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const toSort = getProductsByIds([3, 1, 4]);
    const sorted = sortProductsByPrice(toSort, 'desc');
    expect(sorted.map((p) => p.id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const toSort = getProductsByIds([5, 2, 6]);
    const sorted = sortProductsByPrice(toSort, 'desc');
    expect(sorted.map((p) => p.id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const toSort = getProductsByIds([1, 3, 4]);
    const sorted = sortProductsByPrice(toSort, 'asc');
    expect(sorted).not.toBe(toSort);
    expect(toSort.map((p) => p.id)).toEqual([1, 3, 4]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const toSort = getProductsByIds([1, 3, 4]);
    const sorted = sortProductsByPrice(toSort, 'desc');
    expect(sorted).not.toBe(toSort);
    expect(toSort.map((p) => p.id)).toEqual([1, 3, 4]);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const sorted = sortProductsByPrice(products);
    expect(sorted).not.toBe(products);
    expect(products.map((p) => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
