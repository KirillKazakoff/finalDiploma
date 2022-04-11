import { SeatFullT } from '../../../../../types/models/modelSeats';
import { PlaceT } from '../../../../../types/typesSlices';

export const getCopy = (seats: SeatFullT[]) => seats.map((seat) => ({ ...seat }));

export const selectMatched = (
    places: PlaceT[],
    seats: SeatFullT[],
    carNumber: number,
) => {
    const seatsCopy = getCopy(seats);
    return seatsCopy.map((seat) => {
        const copiedSeat = seat;
        const checkMatch = places.find((place) => {
            return place.seat_number === seat.index && place.carNumber === carNumber;
        });
        if (checkMatch) {
            copiedSeat.selected = true;
        }
        return copiedSeat;
    });
};
