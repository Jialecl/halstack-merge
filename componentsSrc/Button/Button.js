import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from '@salesforce/design-system-react';
import mainLogo from'./logo.svg';

function Button(props) {
  return (
    <>
              <img src={mainLogo} alt="logo" />

      <ButtonM
        {...props}
        onClick={props.onClick}
        disabled={props.disabled}
      />
      </>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['base', 'link', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'text-destructive', 'icon']),
  assistiveText: PropTypes.shape({ icon: PropTypes.string}),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.bool,
  inverse: PropTypes.bool,
  label: PropTypes.string,
  iconCategory: PropTypes.string,
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left','right']),
  iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  onClick: PropTypes.func,
  buttonRef: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
