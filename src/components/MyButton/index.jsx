import React from 'react';
import { ButtonStyling } from './styles';

const MyButton = ({ children, handleClick }) => {
  return <ButtonStyling onClick={handleClick}>{children}</ButtonStyling>;
};

export default MyButton;
