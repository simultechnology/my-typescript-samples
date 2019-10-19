/**
 * get a price after discount
 *
 * @param price
 * @param discount
 */
export function getFinalPrice(price: number, discount: number): number {
  return price - (discount === 0 ? 0 : price / discount);
}
