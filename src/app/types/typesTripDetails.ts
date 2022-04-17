import { PasPlaceT } from '../redux/slices/pasPlacesSlice';
import { TrainRouteT } from './models/modelTickets';

export type TripDirProps = {
    dir: 'to' | 'from';
    desc: string;
    route: TrainRouteT;
    pasPlaces?: PasPlaceT[];
};

export type AgeInfoT = {
    amount: number;
    price: number;
};

export type PlacesAgeInfoT = {
    adult: AgeInfoT;
    microPeople: AgeInfoT;
};
