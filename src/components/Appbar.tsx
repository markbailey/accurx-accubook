import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import useMediaQuery, { MediaQuery } from '../hooks/useMediaQuery';
import { mount } from '../utilities/show';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Button, { ButtonProps } from './Button';
import styles from '../assets/stylesheets/appbar.module.scss';

export type AppbarProps = HTMLAttributes<HTMLElement>;
interface ProfileButtonProps extends Omit<ButtonProps, 'color'> {
  avatar: string;
  name: string;
  email: string;
  isMobile: boolean;
}

function ProfileButton(props: ProfileButtonProps) {
  const { avatar, name, email, isMobile, ...otherProps } = props;
  const renderText = () => (
    <div>
      <span>{name}</span>
      <small>{email}</small>
    </div>
  );

  return (
    <Button {...otherProps} className={styles.profileButton}>
      <img src={avatar} alt={`profile avatar for ${name}`} />
      {mount(!isMobile, renderText())}
    </Button>
  );
}

function Appbar(props: AppbarProps) {
  const isMobile = useMediaQuery(MediaQuery.isMobile);
  const { className: classNameProp, ...otherProps } = props;
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
        <ProfileButton
          name="Mark Bailey"
          email="mark.bailey@accurx.com"
          avatar="/assets/avatar_male.png"
          isMobile={isMobile}
        />
      </div>
    </header>
  );
}

export default Appbar;
