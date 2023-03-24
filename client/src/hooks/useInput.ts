import React, {useState} from "react";

export const useInput = (initialData: string) =>{
    const [value, setValue] = useState(initialData);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}

