import React from 'react';

import {ButtonGroup, ToggleButton} from 'react-bootstrap'

export const ToogleLikedTweets = (props) => {

    const radioValue = props.active;

    const radios = [
        {
            name: 'All',
            value: 'all',
            count: props.numberOfAllTweets,
            disabled: (0 === props.numberOfAllTweets) ? 'disabled': '',
            variant: 'info'
        },
        {
            name: 'Liked',
            value: 'liked',
            count:props.numberOfLikedTweets,
            disabled: (0 === props.numberOfLikedTweets) ? 'disabled': '',
            variant: 'success'
        }
    ];

    return (
        <div className='mb-3'>
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type='radio'
                        variant={radio.variant}
                        disabled={radio.disabled}
                        name='radio'
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange= {props.toggle}
                    >
                        {radio.name} {radio.count}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    );
}
