import { HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { mount } from '../utilities/show';
import styles from '../assets/stylesheets/components/page-header.module.scss';

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> &
  PropsWithChildren<{
    title: string;
  }>;

function PageHeader(props: PageHeaderProps) {
  const { children, className: classNameProp, title, ...otherProps } = props;
  const className = classNames(styles.header, classNameProp);
  const hasChildren = !!children;

  return (
    <div {...otherProps} className={className}>
      <h1 className={styles.title}>{title}</h1>
      {mount(hasChildren, <div>{children}</div>)}
    </div>
  );
}

export default PageHeader;
