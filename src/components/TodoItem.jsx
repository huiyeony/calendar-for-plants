import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TodoItem.css'
import getEmotionImg from '../../util/get-emotion-img'
const TodoItem = ({
  id,
  isDone,
  date,
  content,
  categoryId,
  onUpdate,
  onDelete,
}) => {
  const nav = useNavigate()
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        value={isDone}
        onClick={() => {
          onUpdate(id)
        }}
      />
      <section className={`img_wrapper_${categoryId}`}>
        <img src={getEmotionImg(categoryId)} />
      </section>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          nav('/')
        }}
      >
        편집
      </button>
    </div>
  )
}
export default TodoItem
