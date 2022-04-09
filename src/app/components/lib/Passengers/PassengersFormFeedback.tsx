// /* eslint-disable no-param-reassign */
// import React from 'react';
// import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';

// import { getAges } from './checkAges';
// import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
// import { setInfo } from '../../../redux/slices/infoSlice';
// import { messagesInfo } from '../Common/Info/messagesInfo';

// const { childrenOverwhelm, tooManyPlaces } = messagesInfo;

// const PassengersFormFeedback = (): any => {
//     const dispatch = useAppDispatch();
//     const forms = useAppSelector((state) => state.passengers);
//     const placesAmount = useAppSelector(selectPlacesLength);

//     let msg;
//     const { microPeople, adults } = getAges(forms);
//     if (microPeople / adults > 3) msg = childrenOverwhelm;
//     if (placesAmount > microPeople + adults) msg = tooManyPlaces;

//     if (msg) {
//         dispatch(setInfo({msg, status: 'error'}));
//     }
//     return null;
// }

// export default PassengersFormFeedback
