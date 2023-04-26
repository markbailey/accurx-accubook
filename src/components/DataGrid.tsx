import { Children, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../assets/stylesheets/data-grid.module.scss';

export type DataGridProps = HTMLAttributes<HTMLDivElement>;

function DataGrid(props: DataGridProps) {
  const { children, className: classNameProp, ...otherProps } = props;
  const className = classNames(styles.grid, classNameProp);

  return (
    <div {...otherProps} className={className}>
      {Children.toArray(children).map((child, i) => (
        <div key={`gridItem${i}`} className={styles.item}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default DataGrid;
