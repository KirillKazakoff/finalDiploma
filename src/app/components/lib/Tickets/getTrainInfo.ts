/* eslint-disable no-param-reassign */

import initSeatsInfo from './initSeatsInfo';
import type { SeatsCoachT, SeatsTypesInfoT } from '../../../types/models/modelSeats';
import { sumAvailable } from '../../../fetch/seatsUtils';

const getSeatsTrainInfo = (coachesSeats: SeatsCoachT[]) => {
    return coachesSeats.map((coachSeat, index) => {
        const carNumber = index + 1;
        const { seats, coach } = coachSeat;
        const {
            bottom_price, top_price, price, side_price, class_type: type,
        } = coach;

        const seatsInfo = initSeatsInfo(type, seats);
        const { seatsFull } = seatsInfo;

        if (type === 'first' || type === 'fourth') {
            for (let i = 0; i < seatsFull.length; i += 1) {
                if (seatsFull[i].available) {
                    seatsInfo.available.nochoice += 1;
                    seatsInfo.available.total += 1;

                    seatsFull[i].placeType = type === 'first' ? 'luxe' : 'seatable';
                    seatsFull[i].price = type === 'first' ? price : bottom_price;
                }
            }
            return { coach, seatsInfo, carNumber };
        }

        for (let i = 0; i < 32; i += 1) {
            if (seatsFull[i].available) {
                seatsInfo.available.total += 1;
                if (i % 2 === 0) {
                    seatsInfo.available.top += 1;

                    seatsFull[i].price = top_price;
                    seatsFull[i].placeType = 'top';
                } else {
                    seatsInfo.available.bottom += 1;

                    seatsFull[i].price = bottom_price;
                    seatsFull[i].placeType = 'bottom';
                }
            }
        }

        if (type === 'second') return { coach, seatsInfo, carNumber };
        for (let i = 32; i < seatsFull.length; i += 1) {
            if (seatsFull[i].available) {
                seatsInfo.available.total += 1;
                seatsInfo.available.side += 1;

                seatsFull[i].price = side_price;
                seatsFull[i].placeType = 'side';
            }
        }

        return { coach, seatsInfo, carNumber };
    });
};

export const getTrainInfo = (coachesSeats: SeatsCoachT[]) => {
    const seatsTrainInfo = getSeatsTrainInfo(coachesSeats);
    const seatsCopy = getSeatsTrainInfo(coachesSeats);

    const typesInfo = seatsCopy.reduce<SeatsTypesInfoT>((total, coachInfo) => {
        const { available } = coachInfo.seatsInfo;
        const type = coachInfo.coach.class_type;

        sumAvailable(total, type, available);
        return total;
    }, {});

    return { typesInfo, seatsTrainInfo };
};

export type TrainInfoT = ReturnType<typeof getTrainInfo>;
