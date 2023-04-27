import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { ReactComponent as ArrowLeftIcon } from '../assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from '../assets/icons/arrow_right.svg';
import Button from './Button';
import useMediaQuery, { MediaQuery } from '../hooks/useMediaQuery';
import { mount } from '../utilities/show';
import styles from '../assets/stylesheets/components/pagination.module.scss';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const isMobile = useMediaQuery(MediaQuery.isMobile);
  const { className: classNameProp, page, totalPages, onPageChange, ...otherProps } = props;
  const className = classNames(styles.pager, classNameProp);
  const onButtonClick = (page: number) => () => onPageChange(page);

  return (
    <div {...otherProps} className={className}>
      <Button
        iconOnly
        className={styles.button}
        onClick={onButtonClick(page - 1)}
        disabled={page <= 1}
      >
        <ArrowLeftIcon />
      </Button>

      {mount(
        !isMobile,
        Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={`pagerBtn${index}`}
            iconOnly
            className={styles.button}
            onClick={onButtonClick(index + 1)}
            disabled={page === index + 1}
          >
            {index + 1}
          </Button>
        ))
      )}

      <Button
        iconOnly
        className={styles.button}
        onClick={onButtonClick(page + 1)}
        disabled={page >= totalPages}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
}

export default Pagination;
