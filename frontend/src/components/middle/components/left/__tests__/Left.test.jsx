import React from 'react';
import Left from '../Left';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../redux/store';
import { setHostedByState } from '../../../../../redux/slices/hostedBy/hostedBySlice';
import { mockData } from '../../../../../mocks/mockData';

describe('LeftTop: displaying badges dynamically', () => {
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

describe('LeftMiddle: rendering "about" info from user', () => {
    test('should pass about information as props and render', () => {
        store.dispatch(setHostedByState(mockData[0].hostedBy));

        const { getByText } = render(
            <Provider store={store}>
                <Left />
            </Provider>
        );

        expect(
            getByText('Id leo in vitae turpis massa sed elementum tempus')
        ).toBeInTheDocument();
    });

    test('should only show "read more" button if text is more than 29 words', () => {
        store.dispatch(setHostedByState(mockData[1].hostedBy));

        const { getByRole } = render(
            <Provider store={store}>
                <Left />
            </Provider>
        );

        expect(getByRole('button', { name: 'read more' })).toBeInTheDocument();
    });

    test('"read more" button should disappear and show more text on click', () => {
        store.dispatch(setHostedByState(mockData[1].hostedBy));

        const { getByText, getByRole, queryByText } = render(
            <Provider store={store}>
                <Left />
            </Provider>
        );

        const readMoreBtn = getByRole('button', { name: 'read more' });
        const about = mockData[1].hostedBy.Host.about;

        expect(readMoreBtn).toBeInTheDocument();
        expect(queryByText(about)).not.toBeInTheDocument();

        userEvent.click(readMoreBtn);

        expect(readMoreBtn).not.toBeInTheDocument();
        expect(getByText(about)).toBeInTheDocument();
    });
});
