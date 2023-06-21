import React from 'react';
import './styles/inputText.css';

interface InputTextProps {
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
    inputText: string;
}

const InputText = ({
    onChange,
    onKeyDown,
    inputText
}:InputTextProps) => {
    return (
        <>
            <input type="text"
                className="inputText"  
                placeholder='내용을 입력후 엔터'
                onChange={e=> onChange(e)}
                onKeyDown={e => onKeyDown(e)}
                value={inputText}
            />
        </>
    );
}

export default InputText;