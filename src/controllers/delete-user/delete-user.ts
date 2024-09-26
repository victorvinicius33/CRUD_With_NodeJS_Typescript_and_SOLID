import { User } from '../../models/user';
import { badRequest, ok, serverError } from '../helpers';
import { HttpRequest, HttpResponse, IController } from '../protocols';
import { IDeleteUserRepository } from './protocols';

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handle(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest('Missing user id');
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return ok<User>(user);
    } catch {
      return serverError();
    }
  }
}
