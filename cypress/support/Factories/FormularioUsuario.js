// ESM
import { faker } from '@faker-js/faker';

export function completarFormRegUsuario() {
  return {

    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobileNumber: faker.number.int({min: 900000000, max: 999999999 })    
  };
}