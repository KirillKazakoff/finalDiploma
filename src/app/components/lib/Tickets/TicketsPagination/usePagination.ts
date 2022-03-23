import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import {
    selectLimit,
    selectSort,
    setOffset,
} from '../../../../redux/slices/searchFilterSlice';
import { getNextPagesAmount, getPrevPagesAmount } from './paginationUtils';
import { selectTotalCount } from '../../../../redux/slices/ticketsSlice';

export type OnPageClickT = (page: number) => () => void;

export const usePagination = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const sort = useAppSelector(selectSort);
    const totalCount = useAppSelector(selectTotalCount);

    const maxPage = Math.ceil(totalCount / limit);
    const pages = 4;

    const pageAmount = maxPage < pages ? maxPage : pages;
    const [endPage, setEndPage] = useState(pageAmount);
    const [activePage, setActivePage] = useState(1);
    const [startPage, setStartPage] = useState(1);

    useEffect(() => {
        setEndPage(pageAmount);
        setStartPage(1);
        setActivePage(1);
        dispatch(setOffset(0));
    }, [limit, sort]);

    const onPageClick = (page: number) => () => {
        setActivePage(page);
        dispatch(setOffset((page - 1) * limit));
    };

    const onRightClick = () => {
        const offset = activePage * limit;
        setActivePage(activePage + 1);
        dispatch(setOffset(offset));
        if (activePage !== endPage) return;

        const amount = getNextPagesAmount(pageAmount, activePage, maxPage);
        const newEndPage = endPage + amount;
        const newStartPage = startPage + amount;

        setEndPage(newEndPage);
        setStartPage(newStartPage);
    };

    const onLeftClick = () => {
        const offset = (activePage - 2) * limit;
        setActivePage(activePage - 1);
        dispatch(setOffset(offset));
        if (activePage !== startPage) return;

        const amount = getPrevPagesAmount(pageAmount, activePage);
        const newEndPage = endPage - amount;
        const newStartPage = startPage - amount;

        setEndPage(newEndPage);
        setStartPage(newStartPage);
    };

    return {
        listeners: { onPageClick, onRightClick, onLeftClick },
        states: { endPage, activePage, startPage },
        maxPage,
    };
};
