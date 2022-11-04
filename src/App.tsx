import styles from "./App.module.css";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className={styles.app}>
      <SignUp />
    </div>
  );
}

export default App;
