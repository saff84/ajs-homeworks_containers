import Team from '../set';

test('test add unit', () => {

  const team = new Team()

  const unit = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }
  team.add(unit)
  expect(team.members).toEqual(new Set([unit]));
});

test('test add the same unit', () => {

  const team = new Team()

  const unit = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }
  team.add(unit)
  expect(() => { team.add(unit) }).toThrow('Такой персонаж уже в команде!');
});

test('test add all units', () => {

  const team = new Team()

  const unit1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }

  const unit2 = {
    name: 'Вася',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }

  const unit3 = {
    name: 'Саня',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }

  team.addAll(unit1, unit2, unit3)
  expect(team.members).toEqual(new Set([unit1, unit2, unit3]));
});

test('test toArray members', () => {

  const team = new Team()

  const unit1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }

  const unit2 = {
    name: 'Вася',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }

  const unit3 = {
    name: 'Саня',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  }

  team.addAll(unit1, unit2, unit3)
  expect(team.toArray()).toEqual([unit1, unit2, unit3]);
});