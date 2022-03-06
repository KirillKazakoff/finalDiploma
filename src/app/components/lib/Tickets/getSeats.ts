import { CoachesSeatsT } from '../../../types/models/modelSeats';
import initSeatsInfo from './initSeatsInfo';

const getSeats = (coachesSeats: CoachesSeatsT) => {
    const seatsTrainInfo = coachesSeats.map((coachSeat) => {
        const { seats } = coachSeat;
        const type = coachSeat.coach.class_type;
        const all = coachSeat.coach.available_seats;

        const seatsInfo = initSeatsInfo(type, all, seats);
        const seatsObj = { type, seatsInfo };
        const { seatsFull } = seatsInfo;

        if (type === 'first' || type === 'fourth') {
            for (let i = 0; i < seatsFull.length; i += 1) {
                if (seatsFull[i].available) seatsInfo.available.nochoice += 1;
            }
            return seatsObj;
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

        if (type === 'second') return seatsObj;
        for (let i = 32; i < seatsFull.length; i += 1) {
            if (seatsFull[i].available) {
                seatsInfo.available.side += 1;
            }
        }

        return seatsObj;
    });

    console.log(seatsTrainInfo);
    // console.log(coachesSeats);
};

export default getSeats;
