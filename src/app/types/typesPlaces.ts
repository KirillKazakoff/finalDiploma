import { StationT, TrainRouteT, TrainInfoFullT } from './models/modelTickets';

export type StationProp = { station: StationT };
export type RouteProp = { route: TrainRouteT };
export type DirTProp = { dir: 'from' | 'to' };
export type SeatsInfoProp = { seatsInfo: TrainInfoFullT };
export type DirProp = RouteProp & DirTProp;
