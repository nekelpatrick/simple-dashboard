import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div classname={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/nekelpatrick.png"
          />
          <div classname={styles.authorInfor}>
            <strong>Patrick Nekel</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:00" dateTime="2022-05-11 08:00:41">
          Publicado há 1h
        </time>
      </header>
      <div classname={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          nihil eos atque quam modi dolores consectetur minima dolorem sit
          ipsum. Perspiciatis explicabo facere consequuntur aperiam est sunt
          ullam quia in.
        </p>
      </div>
    </article>
  );
};
