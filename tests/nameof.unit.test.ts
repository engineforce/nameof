import { nameof } from '../src/nameof';

interface Infos {
  test1;
  'test-2';
}

test('nameof pass', () => {
  expect(nameof<Infos>('test1')).toBe('test1');
  expect(nameof<Infos>('test-2')).toBe('test-2');
});
