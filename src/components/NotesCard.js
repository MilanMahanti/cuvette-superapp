import { useState } from "react";
import styles from "./NotesCard.module.css";
const KEY = "text";
function NotesCard() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem(KEY)) || ""
  );
  function handelchange(e) {
    setNotes(e.target.value);
    localStorage.setItem(KEY, JSON.stringify(notes));
  }
  return (
    <div className={styles.card}>
      <p className={styles.heading}>All Notes</p>
      <textarea
        className={styles.note}
        placeholder="Write your thoughts.."
        value={notes}
        onChange={(e) => handelchange(e)}
      >
        {notes}
      </textarea>
    </div>
  );
}

export default NotesCard;
