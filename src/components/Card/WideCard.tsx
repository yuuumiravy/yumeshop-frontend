import Link from 'next/link';
import { Tags } from '../Elements/Tag';
import styles from './WideCard.module.scss';
import { Tag } from 'api/@types';

export type WideCardProps = {
  content: string;
  date: string;
  tags: Tag[];
  link: string;
};

export const WideCard: React.FC<WideCardProps> = ({
  content,
  date,
  tags,
  link,
}) => {
  return (
    <Link href={link}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <time dateTime={date} className={styles.date}>
            {new Date(date).toLocaleDateString()}
          </time>
          <Tags tags={tags} />
        </div>
        <p>{content}</p>
      </div>
    </Link>
  );
};
