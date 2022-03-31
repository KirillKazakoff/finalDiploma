import { CarInfoT } from '../../../../../types/models/modelSeats';
import { PlaceT } from '../../../../../types/typesSlices';
import { selectMatched } from './mapUtils';

export const mapSectionsFirst = (car: CarInfoT, places: PlaceT[]) => {
    const { seatsInfo, carNumber } = car;
    const { seatsFull } = seatsInfo;
    const seatsCopy = selectMatched(places, seatsFull, carNumber);

    const sections = [];

    for (let i = 0; i < seatsFull.length; i += 2) {
        sections.push({
            topLeft: seatsCopy[i],
            topRight: seatsCopy[i + 1],
        });
    }

    return sections;
};
