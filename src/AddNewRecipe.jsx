import React from "react";

function AddNewResipe(props) {
  const [inputValue, setInputValue] = React.useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  function handleClick(inputValue) {
    //console.log("»>", inputValue);
    props.createRecipe(inputValue);
    setInputValue("");
  }

  return (
    <div className="add-recipe">
      <h3 className="add-recipe-title">ADD RECIPE</h3>
      <input
        placeholder="enter recipe name"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="btn" onClick={() => handleClick(inputValue)}>
        SAVE
      </button>
    </div>
  );
}

export default AddNewResipe;
