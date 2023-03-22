import React from 'react';
import * as events from "events";

export interface IProgressBarProps{
    current: number;
    max: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;

    variant: 'volume' | 'time';
}

const ProgressBar:React.FC<IProgressBarProps> = ({current, max, onChange, variant}) => {
    return (
        <div>
            <input
                type={'range'}
                min={0}
                value={current}
                max={max}
                onChange={onChange}
                style={
                    variant === 'time'?
                        {
                            width: '500px',
                            height: '8px'
                        }:
                        {

                        }
                }
            />
        </div>
    );
};

export default ProgressBar;
