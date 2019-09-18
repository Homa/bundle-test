import find from 'lodash-es/find';

const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

export const result = find(users, (user) =>  user.age < 40);

export const hello ="haoloooo";
