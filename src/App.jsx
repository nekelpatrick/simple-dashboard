import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import "./Global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Patrick Nekel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium minima unde totam asperiores earum dolorem, et, iusto cupiditate velit fugit voluptates in ratione saepe alias incidunt magni esse? Quae?"
          />

          <Post
            author="Anna"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laudantium minima unde totam asperiores earum dolorem, et, iusto cupiditate velit fugit voluptates in ratione saepe alias incidunt magni esse? Quae?"
          />
        </main>
      </div>
    </>
  );
}

export default App;
