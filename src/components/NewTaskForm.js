import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      text: taskText,
      category: selectedCategory,
    }

    onTaskFormSubmit(newTask)

    setTaskText("")
    setSelectedCategory(categories[0])
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value = {taskText} onChange = {handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>

        {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
