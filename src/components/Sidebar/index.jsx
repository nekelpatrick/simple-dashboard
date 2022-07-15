import { PencilLine } from "phosphor-react";

import styles from "./Siderbar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/nekelpatrick.png"
        />

        <span className={styles.username}>
          <b>Patrick Nekel</b>
        </span>
        <span className={styles.title}>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
