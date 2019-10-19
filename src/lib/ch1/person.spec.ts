// tslint:disable:no-expression-statement
import test from 'ava';
import { Person } from './person';

test('Person class Success', t => {
  const person = new Person('John');
  t.deepEqual(person.getName(), 'John');
});
