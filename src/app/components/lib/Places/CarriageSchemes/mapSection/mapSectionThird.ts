import { CarInfoT } from '../../../../../types/models/modelSeats';
import { PlaceT } from '../../../../../types/typesSlices';
import { selectMatched } from './mapUtils';

export const mapSectionsThird = (car: CarInfoT, places: PlaceT[]) => {
    const { seatsInfo, carNumber } = car;
    const { seatsFull } = seatsInfo;
    const seatsCopy = selectMatched(places, seatsFull, carNumber);

    const sections = [];
    const length = 32;
    for (let i = 0; i < length; i += 4) {
        sections.push({
            botLeft: seatsCopy[i],
            topLeft: seatsCopy[i + 1],
            botRight: seatsCopy[i + 2],
            topRight: seatsCopy[i + 3],
            seatLeft: null,
            seatRight: null,
        });
    }

    for (let i = 0; i < 16; i += 2) {
        sections[i].seatLeft = seatsCopy[i + length + 1];
        sections[i].seatRight = seatsCopy[i + length + 2];
    }
    // return fullSections;
};
