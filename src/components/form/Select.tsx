import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import styles from '../../assets/stylesheets/components/form.module.scss';

export type SelectOption = { value: string; label: string };
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[] | Readonly<SelectOption[]>;
  placeholder?: string;
};

const Select = forwardRef((props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const { className: classNameProp, options, placeholder, ...otherProps } = props;
  const className = classNames(styles.formField, styles.select, classNameProp);
  return (
    <select {...otherProps} ref={ref} className={className}>
      <option value="" disabled>
        {placeholder ?? 'Please select one'}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default Select;
