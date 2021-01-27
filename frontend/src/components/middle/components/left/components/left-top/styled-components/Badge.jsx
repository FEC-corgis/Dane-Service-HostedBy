import styled from 'styled-components';
import Flex from '../../../../../../../constants/styled-components/Flex';

export default styled(Flex)`
    align-items: center;
    margin-bottom: 24px;
    padding-right: ${(props) => props.first && '12px'};
    padding: ${(props) => !props.first && '0 12px'};
`;
