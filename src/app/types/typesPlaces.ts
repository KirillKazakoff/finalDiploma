/* eslint-disable @typescript-eslint/indent */
import { StationT, TrainRouteT, TrainInfoFullT } from './models/modelTickets';
import { SetStateT } from './typesReact';

export type StationProp = { station: StationT };
export type RouteProp = { route: TrainRouteT };
export type DirTProp = { dir: 'from' | 'to' };
export type SeatsInfoProp = { seatsInfo: TrainInfoFullT };
export type DirProp = RouteProp & DirTProp;
export type ActiveProp = { active: number };
export type CarNumbersProp = { numbers: number[] };

export type CarContentHeaderProps = ActiveProp &
    CarNumbersProp & { setActive: SetStateT<number> };
