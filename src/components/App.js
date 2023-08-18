import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  
    const [filteredCategory, setFilteredCategory] = useState("All") 
    const [tasks, setTasks] = useState(TASKS)
  
    const handleCategorySelect = (category) => {
      setFilteredCategory(category)
    }
  
    const handleTaskFormSubmit = (newTask) => {
      setTasks([...tasks, newTask])
    }
  
    const handleTaskDelete = (taskIndex) => {
      const newTasks = tasks.filter((_, index) => index !== taskIndex)
      setTasks(newTasks)
    }
  
    const filteredTasks = 
    filteredCategory === "All" 
    ? tasks 
    : tasks.filter((task) => task.category === filteredCategory);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
        selectedCategory={filteredCategory}
        onCategorySelect={handleCategorySelect} />
      <NewTaskForm 
      categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
