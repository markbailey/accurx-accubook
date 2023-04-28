import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { mount } from '../utilities/show';
import styles from '../assets/stylesheets/components/loader.module.scss';

export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  show: boolean;
};

const Spinner = () => <div className={styles.spinner}></div>;

function Loader(props: LoaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const [active, setActive] = useState(false);
  const { className: classNameProp, show, ...otherProps } = props;
  const className = classNames(styles.loader, active && styles.show, classNameProp);

  useEffect(() => {
    if (show && !shouldMount) setShouldMount(true);
    else if (show && !active) setActive(true);
    else if (!show && active) setActive(false);
    else if (!show && shouldMount)
      ref.current?.addEventListener('transitionend', () => setShouldMount(false));
  }, [show, active, shouldMount]);

  return mount(
    shouldMount,
    <div {...otherProps} ref={ref} className={className}>
      <div className={styles.inner}>
        <Spinner />
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
