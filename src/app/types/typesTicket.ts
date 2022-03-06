import type { SeatsTypesInfoT } from './models/modelSeats';
import type { TicketRouteT, TrainRouteT } from './models/modelTickets';
import { StationT } from './models/modelTickets';

export type ShortTrainRouteT = {
    from: StationT;
    to: StationT;
    duration: number;
};

export type TicketProps = { ticket: TicketRouteT };

export type TicketLeftProps = {
    departure: TrainRouteT;
};

export type TrainRoutesT = {
    [key: string]: TrainRouteT;
    departure: TrainRouteT;
    arrival?: TrainRouteT;
};

export type TicketCenterProps = {
    routes: TrainRoutesT;
};

export type TicketRightProps = {
    routes: TrainRoutesT;
    available_seats_info: SeatsTypesInfoT;
};

export type TrainRouteProps = {
    route: TrainRouteT;
};

export type TicketTypeTipProps = {
    children: string;
    amount: number;
    cost: number;
};
