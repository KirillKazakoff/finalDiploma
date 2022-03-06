/* eslint-disable no-param-reassign */

import initSeatsInfo from './initSeatsInfo';
import type { SeatsCoachT, SeatsTypesInfoT } from '../../../types/models/modelSeats';
import { SeatsTypesT } from '../../../types/models/modelSeats';

export const sumAvailable = (
    total: SeatsTypesInfoT,
    type: string,
    available: SeatsTypesT,
) => {
    if (!total[type]) {
        total[type] = available;
    } else {
        Object.keys(total[type]).forEach((key) => {
            total[type][key] += available[key];
        });
    }
};

export const getTrainInfo = (coachesSeats: SeatsCoachT[]) => {
    const seatsTrainInfo = coachesSeats.map((coachSeat) => {
        const { seats, coach } = coachSeat;
        const type = coach.class_type;

        const seatsInfo = initSeatsInfo(type, seats);
        const { seatsFull } = seatsInfo;

        if (type === 'first' || type === 'fourth') {
            for (let i = 0; i < seatsFull.length; i += 1) {
                if (seatsFull[i].available) seatsInfo.available.nochoice += 1;
            }
            return { coach, seatsInfo };
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

        if (type === 'second') return { coach, seatsInfo };
        for (let i = 32; i < seatsFull.length; i += 1) {
            if (seatsFull[i].available) {
                seatsInfo.available.side += 1;
            }
        }

        return { coach, seatsInfo };
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
