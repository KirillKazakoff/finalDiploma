import type { TicketRouteT, TrainRouteT } from '../components/lib/Tickets/ticketsModel';
import { StationT } from '../components/lib/Tickets/ticketsModel';

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
};

export type TrainRouteProps = {
    route: TrainRouteT;
};
