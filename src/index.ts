import 'reflect-metadata';
import { createConnection, getConnection, getManager } from 'typeorm';
import { Example } from './entity/Example';
import { User } from './entity/User';

require('dotenv').config();

createConnection()
  .then(async (connection) => {
    const entityManager = getManager();

    const newUser = new User();
    newUser.firstName = 'newUserFirstName';
    newUser.lastName = 'newUserLastName';
    newUser.age = 1200000;

    await entityManager.save(newUser);

    const users = await entityManager.find(User);
    const users2 = await entityManager.find('users');
    console.log(users, users2);
  })
  .catch((error) => console.log(error));
