'use client';

import HomeFrame from "@/components/HomeFrame";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeFrame name="Ruan" />
    </div>
  );
}
