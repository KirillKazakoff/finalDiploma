import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectPassengersInfo } from '../../../../redux/slices/utils/selectPassengersFullName';
import { PersonT } from '../../../../types/models/modelPerson';

export const getFullName = (person: PersonT) => {
    const { first_name, last_name, patronymic } = person;
    return `${last_name} ${first_name} ${patronymic}`;
};

// export const useGetPassenger = () => {
//     const passengersInfo = useAppSelector(selectPassengersInfo);

//     const findPassenger = (name: string) => {
//         const result = passengersInfo.find((passenger) => {

//         })
//     }
// }
