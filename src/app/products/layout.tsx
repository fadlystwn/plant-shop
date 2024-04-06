
import { Analytics } from '@vercel/analytics/react';
import styles from './layout.module.scss';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <>
        {children}
        <Analytics />
      </>
    </div>
  )
}