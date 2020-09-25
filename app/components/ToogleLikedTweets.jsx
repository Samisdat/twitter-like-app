import React from "react";

import {ButtonGroup, ToggleButton} from 'react-bootstrap'

export function ToogleLikedTweets() {

    const radioValue = 'all';

    const radios = [
        { name: 'All', value: 'all' },
        { name: 'Liked', value: 'liked' }
    ];

    return (
        <ButtonGroup toggle>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}
