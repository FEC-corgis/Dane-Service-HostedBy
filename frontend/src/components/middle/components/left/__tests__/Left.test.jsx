import React from 'react';
import Left from '../Left';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../redux/store';
import { setHostedByState } from '../../../../../redux/slices/hostedBy/hostedBySlice';
import { mockData } from '../../../../../mocks/mockData';

describe('displaying badges dynamically', () => {
    test('should display identity and superhost badges', () => {
        store.dispatch(setHostedByState(mockData[0].hostedBy));

        const { getByText } = render(
            <Provider store={store}>
                <Left />
            </Provider>
        );

        expect(getByText('Identity verified')).toBeInTheDocument();
        expect(getByText('Superhost')).toBeInTheDocument();
        expect(getByText('751 Reviews')).toBeInTheDocument();
    });

    test('should NOT display identity and superhost badges', () => {
        store.dispatch(setHostedByState(mockData[1].hostedBy));

        const { getByText, queryByText } = render(
            <Provider store={store}>
                <Left />
            </Provider>
        );

        expect(queryByText('Identity verified')).not.toBeInTheDocument();
        expect(queryByText('Superhost')).not.toBeInTheDocument();
        expect(getByText('610 Reviews')).toBeInTheDocument();
    });
});
