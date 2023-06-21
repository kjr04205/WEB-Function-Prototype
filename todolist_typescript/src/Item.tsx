import React, {useState} from 'react';
import './styles/item.css';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';
import Text from './Text';

interface ItemProps {
    onClickCheckBox(id: number): void;
    onClickDeleteButton(id: number): void;
    completed?: boolean;
    text: string;
    id: number;
}

const Item = ({
    onClickCheckBox,
    onClickDeleteButton,
    completed,
    text,
    id,
}:ItemProps) => {
    return(
        <>
            <div className="itemContainer">
                <CheckBox checked={completed} onClick={()=>onClickCheckBox(id)}/>
                <Text completed={completed}>
                    {text}
                </Text>
                <DeleteButton onClick={() => onClickDeleteButton(id)} />
            </div>
        </>
    )
}
export default Item;