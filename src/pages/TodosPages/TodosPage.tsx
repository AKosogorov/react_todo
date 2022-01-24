import React, { useState, useEffect } from "react";
import { TodoForm } from '../../components/TodoForm/TodoForm';
import { TodoList } from '../../components/TodoList/TodoList';
import { ITodo } from "../../interfaces/ITodo";

// declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [...prev, newTodo])
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))    
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </>
  )
}