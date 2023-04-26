import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import styles from '../assets/stylesheets/button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'danger';
};

const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, color, ...otherProps } = props;
  const newClassName = classNames(styles.button, color && styles[color], className);
  return <button type="button" {...otherProps} ref={ref} className={newClassName} />;
});

export default Button;
