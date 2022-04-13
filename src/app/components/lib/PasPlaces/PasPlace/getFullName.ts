import { PersonT } from '../../../../types/models/modelPerson';

export const getFullName = (person: PersonT) => {
    const { first_name, last_name, patronymic } = person;
    return `${last_name} ${first_name} ${patronymic}`;
};
