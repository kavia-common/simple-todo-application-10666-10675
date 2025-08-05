import React, { useState } from "react";
import styles from "./AddTodo.module.css";

// PUBLIC_INTERFACE
/**
 * AddTodo - Add Todo Screen React Component
 * Allows the user to add a new todo with Title and Detail fields.
 *
 * Interactivity: handles the back button and form submission (shows an alert on submit).
 */
function AddTodo() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  // PUBLIC_INTERFACE
  // Go back to previous page or history (acts as the back button)
  const goBack = () => {
    window.history.back();
  };

  // PUBLIC_INTERFACE
  // Handle form submission (for now: alert and clear input)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && detail.trim()) {
      alert(`Task added:\nTitle: ${title}\nDetail: ${detail}`);
      setTitle("");
      setDetail("");
    }
  };

  return (
    <div className={styles["add-todo-screen"]}>
      {/* Status Bar (static visual placeholders) */}
      <div className={styles["status-bar"]}>
        <div className={styles["notch"]}></div>
        <div className={styles["icons"]}></div>
      </div>

      {/* App Bar */}
      <header className={styles["add-todo-appbar"]}>
        <button
          className={styles["appbar-back-btn"]}
          aria-label="Back"
          onClick={goBack}
          type="button"
        >
          {/* Left arrow SVG icon */}
          <svg
            width="25"
            height="34"
            viewBox="0 0 25 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M22 32L4 17L22 2"
              stroke="white"
              strokeWidth="3.0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className={styles["appbar-title"]}>Add Task</span>
      </header>

      {/* Add Todo Form Section */}
      <main>
        <form
          className={styles["add-todo-form"]}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label className={styles["input-label"]} htmlFor="todoTitle">
            Title
          </label>
          <input
            type="text"
            id="todoTitle"
            name="todoTitle"
            className={styles["add-todo-input"]}
            placeholder="Enter todo title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label
            className={`${styles["input-label"]} ${styles["input-detail-label"]}`}
            htmlFor="todoDetail"
          >
            Detail
          </label>
          <input
            type="text"
            id="todoDetail"
            name="todoDetail"
            className={styles["add-todo-input"]}
            placeholder="Enter details"
            required
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <div className={styles["add-todo-button-container"]}>
            <button type="submit" className={styles["add-todo-button"]}>
              ADD
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddTodo;
