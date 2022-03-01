import {
    StationT,
    SeatsInfoT,
    PriceInfoT,
    TicketExtrasT,
} from '../components/lib/Tickets/ticketsModel';

export type ShortTrainRouteT = {
    from: StationT;
    to: StationT;
    duration: number;
};

export type TicketLeftProps = {
    trainName: string;
    cityFrom: string;
    cityTo: string;
};

export type TicketCenterProps = {
    departure: ShortTrainRouteT;
    arrival?: ShortTrainRouteT;
};

export type TicketRightProps = {
    seats_info: SeatsInfoT;
    price_info: PriceInfoT;
    ticket_extras: TicketExtrasT;
};
