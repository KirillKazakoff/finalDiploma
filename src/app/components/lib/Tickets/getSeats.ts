/* eslint-disable no-param-reassign */
import { CoachesSeatsT } from '../../../types/models/modelSeats';
import initSeatsInfo from './initSeatsInfo';
import { SeatsTrainInfoT } from '../../../types/models/modelTickets';

const getSeats = (coachesSeats: CoachesSeatsT) => {
    const seatsTrainInfo = coachesSeats.map((coachSeat) => {
        const { seats, coach } = coachSeat;
        const type = coach.class_type;

        const seatsInfo = initSeatsInfo(type, seats);
        const seatsObj = { type, seatsInfo };
        const { seatsFull } = seatsInfo;

        if (type === 'first' || type === 'fourth') {
            for (let i = 0; i < seatsFull.length; i += 1) {
                if (seatsFull[i].available) seatsInfo.available.nochoice += 1;
            }
            return { coach, seats: seatsObj };
        }

        for (let i = 0; i < 32; i += 1) {
            if (seatsFull[i].available) {
                if (i % 2 === 0) {
                    seatsInfo.available.top += 1;
                } else {
                    seatsInfo.available.bottom += 1;
                }
            }
        }

        if (type === 'second') return { coach, seats: seatsObj };
        for (let i = 32; i < seatsFull.length; i += 1) {
            if (seatsFull[i].available) {
                seatsInfo.available.side += 1;
            }
        }

        return { coach, seats: seatsObj };
    });

    const typesInfo = seatsTrainInfo.reduce<SeatsTrainInfoT>((total, coach) => {
        const { type, seatsInfo } = coach.seats;

        if (!total[type]) {
            total[type] = seatsInfo;
        } else {
            const prevCoachSeats;
        }

        return total;
    }, {});

    console.log(seatsTrainInfo);
};

// const trainSeatsData = seatsTrainInfo.reduce<SeatsTrainInfoT>((total, coach) => {
//     const { type, seatsInfo } = coach.seats;

//     if (!total[type]) {
//         total[type] = seatsInfo;
//     } else {
//         const prevCoachSeats
//     }

//     return total;
// }, {});
// console.log(trainSeatsData);
// // console.log(coachesSeats);
// };

export default getSeats;
