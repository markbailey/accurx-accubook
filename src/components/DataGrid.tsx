import { Children, Fragment, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { mount } from '../utilities/show';
import useMediaQuery, { MediaQuery } from '../hooks/useMediaQuery';
import styles from '../assets/stylesheets/components/data-grid.module.scss';

export type DataGridProps = HTMLAttributes<HTMLDivElement> & {
  pager?: JSX.Element;
};

function DataGrid(props: DataGridProps) {
  const isMobile = useMediaQuery(MediaQuery.isMobile);
  const { children, className: classNameProp, pager, ...otherProps } = props;
  const className = classNames(styles.grid, classNameProp);
  const noRecordsClassName = classNames(styles.item, styles.noRecords);
  const hasChildren = Children.count(children) > 0;

  return (
    <Fragment>
      {mount(isMobile, pager)}
      <div {...otherProps} className={className}>
        {mount(!hasChildren, <div className={noRecordsClassName}>No records found</div>)}
        {Children.toArray(children).map((child, i) => (
          <div key={`gridItem${i}`} className={styles.item}>
            {child}
          </div>
        ))}
      </div>
      {pager}
    </Fragment>
  );
}

export default DataGrid;
