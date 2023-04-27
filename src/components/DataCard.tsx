import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from '../assets/stylesheets/components/data-card.module.scss';

export type DataCardProps = HTMLAttributes<HTMLDivElement> &
  Omit<PatientRecord, 'id' | 'vaccineDate'>;

function DataCard(props: DataCardProps) {
  const {
    className: classNameProp,
    firstName,
    lastName,
    nhsNumber,
    vaccineType,
    ...otherProps
  } = props;

  const className = classNames(styles.card, classNameProp);
  const fullName = `${lastName} ${firstName}`;

  return (
    <div {...otherProps} className={className}>
      <div>
        <h3 className={styles.title}>Patient Name</h3>
        <span>{fullName}</span>

        <h3 className={styles.title}>NHS Number</h3>
        <span>{nhsNumber}</span>
      </div>

      <div>
        <h3 className={styles.title}>Vaccine</h3>
        <span>{vaccineType}</span>
      </div>
    </div>
  );
}

export default DataCard;
