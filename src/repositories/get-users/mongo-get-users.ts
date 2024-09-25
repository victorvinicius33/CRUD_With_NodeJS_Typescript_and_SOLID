import { IGetUsersRepository } from '../../controllers/get-users/protocols';
import { User } from '../../models/user';

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: 'Victor',
        lastName: 'Galvão',
        email: 'victor@email.com',
        password: '12345',
      },
    ];
  }
}
