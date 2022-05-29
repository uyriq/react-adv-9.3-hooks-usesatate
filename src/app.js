import React, { useState } from "react"; //useState для функционального компонента
import "./style.css";

function GoodDeeds() {
  /* Создавайте хук для переменной deeds здесь */
  const [deeds, setDeeds] = useState([]);

  function handleAddTask(e) {
    const input = e.target.previousSibling;

    /* А здесь передавайте в сеттер массив с новым 
    элементом из input.value */
    setDeeds([...deeds, input.value]);

    input.value = "Напиши, что хорошего?";
  }

  return (
    <>
      <h3>Мои хорошие поступки</h3>
      <input type="text" placeholder="Поступок" />
      <button onClick={handleAddTask}>Добавить!</button>
      <ol>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
      </ol>
    </>
  );
}

export default GoodDeeds;
