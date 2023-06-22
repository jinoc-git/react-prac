import React from "react";

function App() {
  return (
    <>
      <div>
        <h1>Button</h1>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <div>
        <h1>Input</h1>
        <form>
          <label>
            이름
            <input type="text" />
          </label>
          <label>
            가격
            <input type="text" />
          </label>
          <button></button>
        </form>
      </div>
      <div>
        <h1>Modal</h1>
        <button></button>
        <button></button>
      </div>
      <div>
        <h1>Select</h1>
        <div>
          <select>
            <option value="1">리액트</option>
            <option value="2">자바</option>
            <option value="3">스프링</option>
            <option value="4">리액트네이티브</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
