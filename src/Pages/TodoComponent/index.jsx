import React from "react";
import styles from "./todo.module.scss";
let uniqId = 0;
function Todo() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Lấy giá trị từ input
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload khi submit form
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: ++uniqId, text: inputValue, completed: false },
      ]);
      setInputValue(""); // Reset input sau khi thêm
    }
  };
  const handleDelete = (e) => {
    const todoItem = e.target.closest(`.${styles["todo-item"]}`);

    let arr = [];
    if (todoItem) {
      const key = todoItem.dataset.id;
      todos.forEach((todo) => {
        if (todo.id != key) {
          arr.push(todo);
        }
      });
      setTodos([...arr]);
    }
  };
  function handleChecked(e) {
    const todoItem = e.target.closest(`.${styles["todo-item"]}`);
    if (todoItem) {
      const key = Number(todoItem.dataset.id);
      const todosNew = todos;
      const list = todosNew.map((todo) => {
        if (todo.id === key) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos([...list]);
    }
  }
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
          <h1 className={styles["title"]}>Todo App</h1>
          <form className={styles["add-todo"]} onSubmit={handleSubmit}>
            <input
              value={inputValue}
              placeholder="Nhập task mới..."
              className={styles["todo-input"]}
              onChange={handleInputChange}
            />
            <button type="submit" className={styles["add-btn"]}>
              Thêm
            </button>
          </form>

          <ul className={styles["todos"]}>
            {todos.length === 0 && (
              <p className={styles["empty-alert"]}>
                Chưa có task nào. Hãy thêm task đầu tiên!
              </p>
            )}

            {todos.map((todo) => {
              return (
                <li
                  className={styles["todo-item"]}
                  key={todo.id}
                  data-id={todo.id}
                >
                  <input
                    type="checkbox"
                    className={styles["input-checkbox"]}
                    onChange={handleChecked}
                    checked={todo.completed}
                  />
                  <span
                    className={styles["todo-content"]}
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button
                    className={styles["destroy-todo-btn"]}
                    onClick={handleDelete}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles["todo-footer"]}>
            <p className={styles["todo-footer-text"]}>
              Tổng: {todos.length} task(s)
            </p>
            <p className={styles["todo-footer-text"]}>
              Hoàn thành: {todos.filter((todo) => todo.completed).length}{" "}
              task(s)
            </p>
            <p className={styles["todo-footer-text"]}>
              Còn lại:{todos.filter((todo) => !todo.completed).length} task(s)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
