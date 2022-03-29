import { SeatFullT, SeatsCoachInfoT, SeatT } from '../../../types/models/modelSeats';

const initSeatsInfo = (type: string, seats: SeatT[]) => {
    const seatsFull: SeatFullT[] = seats.map((seat) => ({
        ...seat,
        selected: false,
        disabled: false,
    }));
    let allSeats;

    switch (type) {
        case 'first':
            allSeats = 16;
            break;

        case 'second':
            allSeats = 32;
            break;

        case 'third':
            allSeats = 48;
            break;

        case 'fourth':
            allSeats = 62;
            break;

        default:
            break;
    }

    for (let i = seatsFull.length; i < allSeats; i += 1) {
        const seatDisabled: SeatFullT = {
            index: i + 1,
            available: false,
            selected: false,
            disabled: true,
        };
        seatsFull.push(seatDisabled);
    }

    const seatsInfo: SeatsCoachInfoT = {
        available: {
            total: 0,
            top: 0,
            bottom: 0,
            side: 0,
            nochoice: 0,
        },
        seatsFull,
    };
    return seatsInfo;
};

export default initSeatsInfo;
