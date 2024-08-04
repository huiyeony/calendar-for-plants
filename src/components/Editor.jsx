import './Editor.css'
import { useRef, useState } from 'react'
import { format } from 'date-fns'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import getColors from '../../util/get-colors'
import ImgItem from './ImgItem'

const Editor = ({ onCreate, maxId }) => {
  const items = getColors()
  const contentRef = useRef()
  const nav = useNavigate()

  const [input, setInput] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    content: '',
    categoryId: 3,
  })

  //{ date : format("yyyy-MM-dd") , content: string , isDone: boolean}
  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    //state 값 바뀔때 마다 저장
    setInput({ ...input, [name]: value })
  }
  const onSubmit = () => {
    if (input.content === '') {
      contentRef.current.focus()
      return
    }
    onCreate({ ...input })
    setInput({
      date: format(new Date(), 'yyyy-MM-dd'),
      content: '',
      categoryId: 3,
    })
    nav('/') //홈 페이지로 이동
  }
  return (
    <div className="Editor">
      <h4>날짜</h4>
      <input
        type="date"
        name="date"
        value={input.date}
        onChange={onChange}
      />
      <h4>이벤트 종류</h4>
      <section className="category_section">
        <div className="items_wrapper">
          {items.map((item) => (
            <ImgItem
              key={item.id}
              isSelected={input.categoryId === item.id}
              onClick={onChange}
              {...item}
            />
          ))}
        </div>
      </section>
      <h4>이벤트 내용</h4>
      <section className="content_section">
        <textarea
          ref={contentRef}
          placeholder="이벤트 내용을 입력하세요!"
          name="content"
          value={input.content}
          onChange={onChange}
        />
      </section>
      <section className="button_section">
        <Button text="등록" onClick={onSubmit} />
      </section>
    </div>
  )
}
export default Editor
