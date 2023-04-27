import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import styles from '../../assets/stylesheets/components/form.module.scss';

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput = forwardRef((props: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { className: classNameProp, ...otherProps } = props;
  const className = classNames(styles.formField, classNameProp);
  return (
    <input placeholder="Search" {...otherProps} ref={ref} type="search" className={className} />
  );
});

export default SearchInput;
