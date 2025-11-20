// ESM
import { faker } from '@faker-js/faker';

export function crearRegUsuariosAzar() {
  return {
    userName: faker.internet.username(),
    email: faker.internet.email()
  };
}