import { CoachesSeatsT } from '../../../types/models/modelSeats';
import { SeatsCoachInfoT } from '../../../types/models/modelTickets';

// type SeatsCoachInfoTypedT = SeatsCoachInfoT & { type: string };
type SeatsCoachInfoTypedT = { seatsInfo?: SeatsCoachInfoT; type: string };

const getSeats = (coachesSeats: CoachesSeatsT) => {
    // const seatsTrainInfo = coachesSeats.map((coachSeat) => {
    //     const type = coachSeat.coach.class_type;
    //     const all = coachSeat.coach.available_seats;
    //     const seatsInfo: SeatsCoachInfoT = {
    //         all,
    //         top: 0,
    //         bottom: 0,
    //         side: 0,
    //     };
    //     const seats: SeatsCoachInfoTypedT = { type, seatsInfo };

    //     if (type === 'first' || type === 'fourth') {
    //         return seats;
    //     }

    //     for (let i = 0; i < 32; i += 1) {
    //         if (coachSeat.seats[i].available) {
    //             if (i % 2 === 0) {
    //                 seats.seatsInfo.top += 1;
    //             } else {
    //                 seats.seatsInfo.bottom += 1;
    //             }
    //         }
    //     }

    //     if (type === 'second') return seats;
    //     for (let i = 33; i < 48; i += 1) {
    //         if (coachSeat.seats[i].available) {
    //             seats.seatsInfo.side += 1;
    //         }
    //     }

    //     return seats;
    // });

    // console.log(seatsTrainInfo);
    console.log(coachesSeats);
};

export default getSeats;
