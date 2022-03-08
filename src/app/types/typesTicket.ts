import type { TicketRouteT, TrainRouteT } from './models/modelTickets';
import { StationT, TicketInfoT } from './models/modelTickets';
import { TotalSeatsInfoT, TotalSeatsTypeT } from './models/modelSeats';

export type ShortTrainRouteT = {
    from: StationT;
    to: StationT;
    duration: number;
};

export type TicketProps = { ticket: TicketInfoT };

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
    seatsInfoAux: TotalSeatsInfoT;
};

export type TrainRouteProps = {
    arrowCls: string;
    route: TrainRouteT;
};

export type TicketTypeProps = {
    typeKey: string;
    typeInfo: TotalSeatsTypeT;
};

export type TicketTypeTipProps = {
    children: string;
    amount: number;
    cost: number;
};
