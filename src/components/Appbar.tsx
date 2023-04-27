import { HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';

import useMediaQuery, { MediaQuery } from '../hooks/useMediaQuery';
import { mount } from '../utilities/show';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Button, { ButtonProps } from './Button';
import styles from '../assets/stylesheets/components/appbar.module.scss';

export type AppbarProps = HTMLAttributes<HTMLElement> & {
  user: User;
  onProfileClick?: ProfileButtonProps['onClick'];
};

interface ProfileButtonProps extends Omit<ButtonProps, 'color'> {
  user: User;
  isMobile: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ProfileButton(props: ProfileButtonProps) {
  const { user, isMobile, onClick, ...otherProps } = props;

  const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick !== 'function') return alert('Functionality not implemented yet');
    onClick(event);
  };

  return (
    <Button {...otherProps} className={styles.profileButton} onClick={onButtonClick}>
      <img src={user.avatar} alt={`profile avatar for ${user.displayName}`} />
      {mount(
        !isMobile,
        <div>
          <span>{user.displayName}</span>
          <small>{user.email}</small>
        </div>
      )}
    </Button>
  );
}

function Appbar(props: AppbarProps) {
  const isMobile = useMediaQuery(MediaQuery.isMobile);
  const { className: classNameProp, user, onProfileClick, ...otherProps } = props;
  const className = classNames(styles.appbar, classNameProp);

  return (
    <header {...otherProps} className={className}>
      <div className={styles.toolbar}>
        <div className={styles.brand}>
          <Logo />
          {!isMobile && (
            <span className={styles.appName}>
              <strong>Accu</strong>book
            </span>
          )}
        </div>

        <h2 className={styles.title}>Dashboard</h2>
        <ProfileButton user={user} isMobile={isMobile} onClick={onProfileClick} />
      </div>
    </header>
  );
}

export default Appbar;
