import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import styles from './layout.module.scss';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header >
        <Navigation />
      </Header >
      <>
        {children}
      </>
      <Footer />
    </div>
  )
}