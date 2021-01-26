import React from 'react';
import Top from '../Top';
import { render } from '@testing-library/react';

describe('Top component', () => {
    test('should render props to screen', () => {
        const { getByText } = render(
            <Top name={'Mark'} joinDate={'2021-01-25T08:00:00.000Z'} />
        );

        expect(getByText('Hosted by Mark')).toBeInTheDocument();
        expect(getByText('Joined in January 2021')).toBeInTheDocument();
    });
});
