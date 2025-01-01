import React, { useState } from 'react';
import { Plus, Calendar, Clock, Check, Trash2, Edit2, X } from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Partial<Todo>>({});
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const handleAddTodo = () => {
    if (!newTodo.title || !newTodo.date) return;

    const todo: Todo = {
      id: Date.now().toString(),
      title: newTodo.title,
      description: newTodo.description || '',
      date: newTodo.date,
      time: newTodo.time || '',
      completed: false,
    };

    setTodos([...todos, todo]);
    setNewTodo({});
    setIsAddingTodo(false);
  };

  const toggleTodoComplete = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditingTodo = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setNewTodo(todo);
  };

  const updateTodo = () => {
    if (!editingTodoId || !newTodo.title || !newTodo.date) return;

    setTodos(todos.map(todo =>
      todo.id === editingTodoId ? { ...todo, ...newTodo } : todo
    ));
    setEditingTodoId(null);
    setNewTodo({});
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Tournaments</h2>
        <button
          onClick={() => setIsAddingTodo(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      {(isAddingTodo || editingTodoId) && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                value={newTodo.title || ''}
                onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={newTodo.description || ''}
                onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                placeholder="Enter task description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={newTodo.date || ''}
                  onChange={(e) => setNewTodo({ ...newTodo, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  value={newTodo.time || ''}
                  onChange={(e) => setNewTodo({ ...newTodo, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsAddingTodo(false);
                  setEditingTodoId(null);
                  setNewTodo({});
                }}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={editingTodoId ? updateTodo : handleAddTodo}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                {editingTodoId ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 ${
              todo.completed
                ? 'border-green-500'
                : 'border-indigo-500'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTodoComplete(todo.id)}
                  className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    todo.completed
                      ? 'border-green-500 bg-green-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {todo.completed && <Check className="w-3 h-3 text-white" />}
                </button>
                <div>
                  <h3 className={`font-medium ${
                    todo.completed
                      ? 'text-gray-500 line-through'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {todo.title}
                  </h3>
                  {todo.description && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {todo.description}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {todo.date}
                    </div>
                    {todo.time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {todo.time}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => startEditingTodo(todo)}
                  className="p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {todos.length === 0 && !isAddingTodo && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-2 text-gray-600 dark:text-gray-400">No matches added yet</p>
            <button
              onClick={() => setIsAddingTodo(true)}
              className="mt-4 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 font-medium"
            >
              Add Your Interests 
            </button>
          </div>
        )}
      </div>
    </div>
  );
}