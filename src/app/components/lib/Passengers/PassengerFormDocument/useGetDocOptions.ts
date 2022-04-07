import { useEffect } from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectField } from '../../../../redux/slices/passengersSlice';
import { useSetInput } from '../useSetInput';
import { useSetError } from '../useSetError';

export const useGetDocOptions = (id: string) => {
    const setInput = useSetInput(id, 'document_type');
    const docTypeState = useAppSelector(selectField(id, 'document_type'));
    const isAdultState = useAppSelector(selectField(id, 'is_adult'));
    const setError = useSetError(id, 'document_series');

    const isAdult = isAdultState.value === 'Взрослый';

    const getOptions = () => {
        const optionsObj = {
            selected: docTypeState.value,
            options: ['Паспорт РФ', 'Свидетельство о рождении'],
        };

        if (isAdult) return optionsObj;

        optionsObj.selected = 'Свидетельство о рождении';
        optionsObj.options = [];

        return optionsObj;
    };

    useEffect(() => {
        if (!isAdult) {
            setInput('Свидетельство о рождении');
            setError('');
        }
    }, [isAdultState.value]);

    return getOptions;
};
