import { CarInfoT } from '../../../../../types/models/modelSeats';
import { PlaceT } from '../../../../../types/typesSlices';
import { selectMatched } from './mapUtils';

export const mapSectionsFourth = (car: CarInfoT, places: PlaceT[]) => {
    const { seatsInfo, carNumber } = car;
    const { seatsFull } = seatsInfo;
    const seatsCopy = selectMatched(places, seatsFull, carNumber);

    const firstRow = [];
    for (let i = 1; i < 32; i += 2) {
        firstRow.push(seatsCopy[i]);
    }

    const secondRow = [];
    for (let i = 0; i < 32; i += 2) {
        secondRow.push(seatsCopy[i]);
    }

    const thirdRow = [];
    for (let i = 33; i < 60; i += 2) {
        thirdRow.push(seatsCopy[i]);
    }

    const fourthRow = [];
    for (let i = 32; i < 62; i += 2) {
        fourthRow.push(seatsCopy[i]);
    }

    const lastSeat = seatsCopy[seatsCopy.length - 1];
    fourthRow.push(lastSeat);

    return [
        [firstRow, secondRow],
        [thirdRow, fourthRow],
    ];
};
