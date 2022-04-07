import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectField } from '../../../../redux/slices/passengersSlice';

export const useGetOptions = (id: string) => {
    const isAdultState = useAppSelector(selectField(id, 'is_adult'));
    const docTypeState = useAppSelector(selectField(id, 'document_type'));

    const getOptions = () => {
        const optionsObj = {
            selected: docTypeState.value,
            options: ['Паспорт РФ', 'Свидетельство о рождении'],
        };

        if (isAdultState.value === 'Взрослый') return optionsObj;

        optionsObj.selected = 'Свидетельство о рождении';
        optionsObj.options = [];

        return optionsObj;
    };

    return getOptions;
};
