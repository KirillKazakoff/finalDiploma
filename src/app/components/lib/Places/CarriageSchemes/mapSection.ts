import { CarInfoT, SeatFullT } from '../../../../types/models/modelSeats';
import { PlaceT } from '../../../../types/typesSlices';

const getCopy = (seats: SeatFullT[]) => seats.map((seat) => ({ ...seat }));

export const mapSectionsSecond = (car: CarInfoT, places: PlaceT[]) => {
    const { seatsInfo, carNumber } = car;
    const { seatsFull } = seatsInfo;
    const seatsCopy = getCopy(seatsFull);

    const sections = [];
    for (let i = 0; i < seatsFull.length; i += 4) {
        for (let k = 0; k < 4 * i; k += 1) {
            const checkMatch = places.find((place) => {
                return place.placeNumber === k + 1 && place.carNumber === carNumber;
            });
            if (checkMatch) {
                seatsCopy[k].selected = true;
            }
        }

        sections.push({
            botLeft: seatsCopy[i],
            topLeft: seatsCopy[i + 1],
            botRight: seatsCopy[i + 2],
            topRight: seatsCopy[i + 3],
        });
    }
    return sections;
};
