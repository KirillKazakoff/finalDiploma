import type { TicketRouteT, TrainRouteT } from './models/modelTickets';
import { StationT, SeatsTrainInfoT } from './models/modelTickets';

export type ShortTrainRouteT = {
    from: StationT;
    to: StationT;
    duration: number;
};

export type TicketProps = { ticket: TicketRouteT };

export type TicketLeftProps = {
    departure: TrainRouteT;
};

export type TicketCenterProps = {
    routes: {
        departure: TrainRouteT;
        arrival?: TrainRouteT;
    };
};

export type TicketRightProps = {
    routes: {
        departure: TrainRouteT;
        arrival?: TrainRouteT;
    };
    available_seats_info: SeatsTrainInfoT;
};

export type TrainRouteProps = {
    route: TrainRouteT;
};

export type TicketTypeTipProps = {
    children: string;
    amount: number;
    cost: number;
};
