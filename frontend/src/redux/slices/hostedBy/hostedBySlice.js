import { createSlice } from '@reduxjs/toolkit';
import { getHostedByData } from './helpers';

const initialState = {
    duringYourStay: '',
    responseTime: 0,
    responseRate: 0,
    host: {
        name: '',
        about: '',
        numberOfReviews: 0,
        identityVerified: false,
        isSuperhost: false,
        avatar: '',
        joinedOn: '',
        languages: [],
    },
    coHosts: [],
};

const hostedBySlice = createSlice({
    name: 'hostedBy',
    initialState,
    reducers: {
        setHostedByState: (state, action) => {
            return {
                ...state,
                duringYourStay: action.payload.duringYourStay,
                responseTime: action.payload.responseTime,
                responseRate: action.payload.responseRate,
                host: {
                    name: action.payload.Host.name,
                    about: action.payload.Host.about,
                    numberOfReviews: action.payload.Host.numberOfReviews,
                    identityVerified: action.payload.Host.identityVerified,
                    isSuperhost: action.payload.Host.isSuperhost,
                    avatar: action.payload.Host.avatar,
                    joinedOn: action.payload.Host.joinedOn,
                    languages: action.payload.Host.languages,
                },
                coHosts: action.payload.CoHosts,
            };
        },
    },
});

export const { setHostedByState } = hostedBySlice.actions;

export const handleGetHostedByData = (id) => async (dispatch) => {
    try {
        const { hostedBy } = await getHostedByData(id);
        dispatch(setHostedByState(hostedBy));
    } catch (error) {
        console.log('ERROR GETTING DATA');
    }
};

export default hostedBySlice.reducer;
