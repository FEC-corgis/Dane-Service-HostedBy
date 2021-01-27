import React, { useState, useEffect } from 'react';
import About from './styled-components/About';
import ReadMore from './components/read-more/ReadMore';
import LeftMiddleBox from './styled-components/LeftMiddleBox';

const LeftMiddle = (props) => {
    const [about, setAbout] = useState('');
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        if (props.about.length <= 220) {
            setAbout(props.about);
            setShowButton(false);
        } else {
            setAbout(`${props.about.split(' ').splice(0, 29).join(' ')}...`);
        }
    }, [props.about]);

    const handleClick = () => {
        setAbout(props.about);
        setShowButton(false);
    };

    return (
        <LeftMiddleBox>
            <About className={'font'}>{about}</About>
            {showButton && <ReadMore handleClick={handleClick} />}
        </LeftMiddleBox>
    );
};

export default LeftMiddle;
