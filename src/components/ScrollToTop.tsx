import { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { ReactComponent as ArrowUpIcon } from '../assets/icons/arrow_up.svg';
import { mount } from '../utilities/show';
import useEventListener from '../hooks/useEventListener';
import Button, { ButtonProps } from './Button';
import styles from '../assets/stylesheets/components/scroll-to-top.module.scss';

type ScrollToTopProps = ButtonProps & {
  offset: number;
};

const target = document.getElementById('root') ?? document.body;

function ScrollToTop(props: ScrollToTopProps) {
  const [shouldMount, setShouldMount] = useState(false);
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { offset, className, ...otherProps } = props;
  const newClassName = classNames(styles.button, className, show && styles.show);

  const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const onTransitionEnd = useCallback(
    () => (!show ? setShouldMount(false) : false),
    [show, setShouldMount]
  );

  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const isScrolled = scrollTop > offset;

    if (isScrolled && !shouldMount) setShouldMount(true);
    else setShow(isScrolled);
  }, [offset, shouldMount, setShow, setShouldMount]);

  useEventListener('scroll', onScroll, window);
  useEventListener('transitionend', onTransitionEnd, buttonRef.current);

  return mount(
    shouldMount,
    createPortal(
      <Button
        ref={buttonRef}
        {...otherProps}
        className={newClassName}
        onClick={onClick}
        title="Scroll to top"
      >
        <ArrowUpIcon />
      </Button>,
      target
    )
  );
}

export default ScrollToTop;
