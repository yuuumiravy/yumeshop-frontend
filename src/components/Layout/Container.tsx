export type ContainerProps = { children: React.ReactNode };
import styles from './Container.module.scss';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
