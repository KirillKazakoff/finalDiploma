import { CarInfoT } from '../../../../../types/models/modelSeats';
import { PlaceT } from '../../../../../types/typesSlices';
import { selectMatched } from './mapUtils';

export const mapSectionsSecond = (car: CarInfoT, places: PlaceT[]) => {
    const { seatsInfo, carNumber } = car;
    const { seatsFull } = seatsInfo;
    const seatsCopy = selectMatched(places, seatsFull, carNumber);

    const sections = [];

    for (let i = 0; i < seatsFull.length; i += 4) {
        sections.push({
            botLeft: seatsCopy[i],
            topLeft: seatsCopy[i + 1],
            botRight: seatsCopy[i + 2],
            topRight: seatsCopy[i + 3],
        });
    }
    console.log(sections);
    return sections;
};
