import React from 'react';
import * as events from "events";

export interface IProgressBarProps{
    current: number;
    max: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const ProgressBar:React.FC<IProgressBarProps> = ({current, max, onChange}) => {
    return (
        <div>
            <input
                type={'range'}
                min={0}
                value={current}
                max={max}
                onChange={onChange}
            />
        </div>
    );
};

export default ProgressBar;
