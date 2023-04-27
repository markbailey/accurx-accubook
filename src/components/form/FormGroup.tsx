import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../../assets/stylesheets/components/form.module.scss';

export type FormGroupProps = HTMLAttributes<HTMLDivElement> & {
  noStacking?: boolean;
};

function FormGroup(props: FormGroupProps) {
  const { children, className: classNameProp, noStacking, ...otherProps } = props;
  const className = classNames(styles.formGroup, noStacking && styles.noStacking, classNameProp);

  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  );
}

export default FormGroup;
