import React from 'react';
import { InputArea, Input } from './styles';

export default ({ ...props }) => {
    return (
        <InputArea>
            {/* <Icon fill='#9C98A6'/> */}
            <Input {...props} />
        </InputArea>
    );
}