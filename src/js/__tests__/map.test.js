import ErrorRepository from '../map';

test('test translate code', () => {

  const er = new ErrorRepository()
  er.errors.set(1, 'ошибка 1')
  er.errors.set(2, 'ошибка 2')
  er.errors.set(3, 'ошибка 3')
  er.errors.set(4, 'ошибка 4')
  er.errors.set(5, 'ошибка 5')

  expect(er.translate(4)).toBe('ошибка 4');
});

test('test err', () => {

  const er = new ErrorRepository()
  er.errors.set(1, 'ошибка 1')
  er.errors.set(2, 'ошибка 2')
  er.errors.set(3, 'ошибка 3')
  er.errors.set(4, 'ошибка 4')
  er.errors.set(5, 'ошибка 5')

  expect(er.translate(7)).toBe('Unknown error');
});
