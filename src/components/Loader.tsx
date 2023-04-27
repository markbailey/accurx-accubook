import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../assets/stylesheets/components/loader.module.scss';

export type LoaderProps = HTMLAttributes<HTMLDivElement>;

function Loader(props: LoaderProps) {
  const { className: classNameProp, ...otherProps } = props;
  const className = classNames(styles.loader, classNameProp);
  return (
    <div {...otherProps} className={className}>
      <span>Loading...</span>
    </div>
  );
}

export default Loader;
