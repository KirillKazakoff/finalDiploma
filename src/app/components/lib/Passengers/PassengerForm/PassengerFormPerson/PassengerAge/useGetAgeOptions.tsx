import { useEffect } from 'react';
import {
    selectIsChildForm,
    selectField,
} from '../../../../../../redux/slices/passengersSlice';
import { useSetInput } from '../../../useSetInput';
import { useAppSelector } from '../../../../../../redux/reduxHooks';

export const useGetAgeOptions = (id: string) => {
    const setInput = useSetInput('is_adult', id);
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
    });

    return getOptions;
};
