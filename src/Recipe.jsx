import React from "react";

function Recipe(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [isRepeated, setRepeated] = React.useState(false);

  const refDescription = React.useRef();

  function handleOpenIngr() {
    refDescription.current.classList.toggle("isOpen");
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    if (props.ingredients.includes(e.target.value)) {
      setRepeated(true);
    } else {
      setRepeated(false);
    }
  }

  function handleClick(value, id) {
    if (isRepeated) {
      return;
    } else {
      props.handleAddIng(value, id);
      setInputValue("");
    }
  }

  function handleSpanClick(id, item) {
    props.handleDelIng(id, item);
  }

  return (
    <div className="recipe">
      <h3 className="recipe-title" onClick={handleOpenIngr}>
        {props.name}
      </h3>
      <div className="recipe-description" ref={refDescription}>
        <ol className="recipe-ingredients">
          {props.ingredients.map((item, index) => {
            return (
              <li className="ingredients-item" key={item + index}>
                <span>
                  {index + 1}. {item}
                </span>
                <span
                  className="del-btn"
                  onClick={() => handleSpanClick(props.id, item)}
                >
                  &#x2715;
                </span>
              </li>
            );
          })}
        </ol>
        <input
          type="text"
          placeholder="enter ingredient name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn"
          onClick={() => handleClick(inputValue, props.id)}
        >
          Add ingredient
        </button>
        <p className={isRepeated ? "note isVisible" : "note"}>
          This ingredient has been already added
        </p>
        <textarea
          className="ingredient-textarea"
          value={props.description}
          onChange={(e) => props.addDescription(e, props.id)}
        />
      </div>
    </div>
  );
}

export default Recipe;
