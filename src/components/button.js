import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.css';

const Button = forwardRef(function Button(
  { as: Comp = 'button', children, className, variant, ...others },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={classNames(className, styles.button, {
        [styles.primary]:
          variant === 'primary' || variant === 'primaryInverted',
        [styles.primaryInverted]: variant === 'primaryInverted',
        [styles.secondary]:
          variant === 'secondary' || variant === 'secondaryInverted',
        [styles.secondaryInverted]: variant === 'secondaryInverted'
      })}
      {...others}
    >
      {children}
    </Comp>
  );
});

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'primaryInverted',
    'secondary',
    'secondaryInverted'
  ])
};

export default Button;
