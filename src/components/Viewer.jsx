import './Viewer.css'
import { useContext } from 'react'
import { format } from 'date-fns'
import { TodosContext, CalendarContext } from '../App'
import TodoItem from './TodoItem'

const Viewer = () => {
  const { todos, onUpdate, onDelete } =
    useContext(TodosContext)
  const { selectedDate } = useContext(CalendarContext)
  const filteredTodos = todos.filter(
    (todo) =>
      todo.date ===
      format(selectedDate.selectedDate, 'yyyy-MM-dd')
  )
  console.log(todos)
  return (
    <div className="Viewer">
      <h4>{`오늘의 todo `}</h4>
      <div className="list_wrapper">
        {filteredTodos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className="no_available_todo">
        {filteredTodos.length == 0
          ? `오늘은 일정이 없어요..🥲`
          : ''}
      </div>
    </div>
  )
}
export default Viewer
