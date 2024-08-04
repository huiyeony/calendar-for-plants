import { useReducer, useRef, useEffect } from 'react'
interface ITodo {
  id: number
  isDone: boolean
  date: string
  content: string
  categoryId: number
}
function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return action.data
    case 'create':
    case 'update':
    case 'delete': {
      const data = JSON.stringify(action.data)
      localStorage.setItem('todos', data)
      return action.data
    }
  }
}
const useTodo = () => {
  const idRef = useRef(0)
  const [todos, setTodos] = useReducer(reducer, [])
  useEffect(() => {
    const storedData = localStorage.getItem('todos')
    if (storedData === '') return

    const parsedData = JSON.parse(storedData!!)
    if (!Array.isArray(parsedData)) return

    var maxId = 0
    parsedData.map((data) => {
      if (data.id >= maxId) maxId = data.id
    })
    maxId += 1

    idRef.current = maxId //새로운 todo id
    setTodos({
      type: 'init',
      data: parsedData,
    })
  }, []) //마운트
  const onCreate = ({ date, content, categoryId }) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      date: date,
      content: content,
      categoryId: categoryId,
    }
    setTodos({
      type: 'create',
      data: [newTodo, ...todos],
    })
  }
  const onUpdate = (id) => {
    const newTodos = todos.map((todo: ITodo) =>
      todo.id === id
        ? { ...todo, ['isDone']: !todo.isDone }
        : todo
    )
    setTodos({
      type: 'update',
      data: newTodos,
    })
  }
  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos({
      type: 'delete',
      data: newTodos,
    })
  }

  return {
    todos: todos,
    maxId: idRef.current,
    onCreate: onCreate,
    onUpdate: onUpdate,
    onDelete: onDelete,
  }
}
export default useTodo
