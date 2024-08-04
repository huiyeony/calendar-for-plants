import Header from '../components/Header'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TodosContext } from '../App'
import './New.css'
import Editor from '../components/Editor'
const New = () => {
  const nav = useNavigate()
  const { maxId, onCreate } = useContext(TodosContext)

  return (
    <div>
      <Header
        leftChild={
          <Button
            text="<"
            onClick={() => {
              nav(-1)
            }}
          />
        }
        center="새로운 할일"
      />
      <Editor onCreate={onCreate} maxId={maxId} />
    </div>
  )
}
export default New
