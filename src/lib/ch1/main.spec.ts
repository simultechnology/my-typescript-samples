// tslint:disable:no-expression-statement
import test from 'ava';
import { getFinalPrice } from './main';

test('getFinalPrice Success', t => {
  t.deepEqual(getFinalPrice(100, 10), 90);
});

test('getFinalPrice Failure', t => {
  // t.throws(getFinalPrice(100, "10%"));
  t.deepEqual(getFinalPrice(100, 0), 100);
});
