/* eslint-disable no-param-reassign */

import initSeatsInfo from './initSeatsInfo';
import type { SeatsCoachT, SeatsTypesInfoT } from '../../../types/models/modelSeats';
import { sumAvailable } from '../../../fetch/seatsUtils';

export const getTrainInfo = (coachesSeats: SeatsCoachT[]) => {
    const seatsTrainInfo = coachesSeats.map((coachSeat, index) => {
        const carNumber = index + 1;
        const { seats, coach } = coachSeat;
        const type = coach.class_type;

        const seatsInfo = initSeatsInfo(type, seats);
        const { seatsFull } = seatsInfo;

        if (type === 'first' || type === 'fourth') {
            for (let i = 0; i < seatsFull.length; i += 1) {
                if (seatsFull[i].available) seatsInfo.available.nochoice += 1;
            }
            return { coach, seatsInfo, carNumber };
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

        if (type === 'second') return { coach, seatsInfo, carNumber };
        for (let i = 32; i < seatsFull.length; i += 1) {
            if (seatsFull[i].available) {
                seatsInfo.available.side += 1;
            }
        }

        return { coach, seatsInfo, carNumber };
    });

    const typesInfo = seatsTrainInfo.reduce<SeatsTypesInfoT>((total, coachInfo) => {
        const { available } = coachInfo.seatsInfo;
        const type = coachInfo.coach.class_type;

        sumAvailable(total, type, available);
        return total;
    }, {});

    return { typesInfo, seatsTrainInfo };
};

export type TrainInfoT = ReturnType<typeof getTrainInfo>;
