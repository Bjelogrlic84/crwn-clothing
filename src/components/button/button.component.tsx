import React, { FC, ButtonHTMLAttributes } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (
  buttonType: BUTTON_TYPE_CLASSES = BUTTON_TYPE_CLASSES.base
): typeof BaseButton | typeof GoogleSignInButton | typeof InvertedButton => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.base:
      return BaseButton;
    case BUTTON_TYPE_CLASSES.google:
      return GoogleSignInButton;
    case BUTTON_TYPE_CLASSES.inverted:
      return InvertedButton;
    default:
      return BaseButton; // Fallback to base button if invalid buttonType is provided
  }
};

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base, // Default to 'base' buttonType if not provided
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
