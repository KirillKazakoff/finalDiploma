import { useEffect } from 'react';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import {
    selectIsChildForm,
    selectField,
} from '../../../../../redux/slices/passengersSlice';
import { useSetInput } from '../../useSetInput';

export const useGetAgeOptions = (id: string) => {
    const setInput = useSetInput(id, 'is_adult');
    const isChildForm = useAppSelector(selectIsChildForm(id));
    const ageState = useAppSelector(selectField(id, 'is_adult'));

    const getOptions = () => {
        const optionsObj = {
            selected: ageState.value,
            options: ['Взрослый', 'Детский'],
        };

        if (!isChildForm) return optionsObj;

        optionsObj.selected = 'Детский';
        optionsObj.options = [];

        return optionsObj;
    };

    useEffect(() => {
        if (isChildForm) setInput('Детский');
    }, [ageState.value]);

    return getOptions;
};
