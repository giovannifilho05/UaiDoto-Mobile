import React from 'react';
import { InputArea, Input } from './styles';

export default ({ ...props }) => {
    return (
        <InputArea> 
            <Input {...props} />
        </InputArea>
    );
}