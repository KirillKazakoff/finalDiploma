import { TrainInfoFullT } from '../../../types/models/modelTickets';
import { CarContentT, PlacesStateT } from '../../../types/typesSlices';

const initExtras = { wifi_price: 0, linens_price: 0 };

const initialCarContent: CarContentT = {
    carriageType: 'idle',
    extras: [],
    places: [],
    activeCar: null,
};

export const initialState: PlacesStateT = {
    activeTicket: null,
    routes: {
        departure: { ...initialCarContent },
        arrival: { ...initialCarContent },
    },
};

export const initExtrasRoute = (state: PlacesStateT, route: TrainInfoFullT) => {
    route.trainInfo.seatsTrainInfo.forEach((train) => {
        state.routes.departure.extras.push({
            carNumber: train.carNumber,
            prices: { ...initExtras },
        });
    });
};
