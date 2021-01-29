import styled from 'styled-components';
import FlexStart from '../../../constants/styled-components/FlexStart';

export default styled(FlexStart)`
    width: 100%;
    padding-top: 48px;
    margin-bottom: 24px;
    align-items: center;

    @media (max-width: 743px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-bottom: 0px;
    }
`;
