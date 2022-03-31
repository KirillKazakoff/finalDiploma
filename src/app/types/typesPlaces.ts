/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { StationT, TrainRouteT, TrainInfoFullT } from './models/modelTickets';
import { CarInfoT, SeatFullT } from './models/modelSeats';

export type StationProp = { station: StationT };
export type RouteProp = { route: TrainRouteT };
export type DirTProp = { dir: 'from' | 'to' };
export type SeatsInfoProp = { seatsInfo: TrainInfoFullT };
export type DirProp = RouteProp & DirTProp;
export type ActiveProp = { active: number };
export type CarNumbersProp = { numbers: number[] };

export type CarContentHeaderProps = CarNumbersProp & {
    onClick: (count: number) => () => void;
    active: number;
};

export type CarInfoProps = { car: CarInfoT; route: string };
export type ServiceProps = {
    children: React.ReactNode;
    service: { name: string; isIncluded: boolean; price: number };
    route: string;
};

export type SectionThirdT = {
    botLeft: SeatFullT;
    topLeft: SeatFullT;
    botRight: SeatFullT;
    topRight: SeatFullT;
    seatLeft: SeatFullT | null;
    seatRight: SeatFullT | null;
};
