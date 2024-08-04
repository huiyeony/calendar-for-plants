import getEmotionImg from '../../util/get-emotion-img'
import './ImgItem.css'

const ImgItem = ({
  isSelected,
  onClick,
  id,
  name,
  rgb,
}) => {
  const onClickHandler = () => {
    onClick({
      target: {
        name: 'categoryId',
        value: id,
      },
    })
  }
  return (
    <div
      onClick={onClickHandler}
      className={`ImgItem ${
        isSelected ? `ImgItem_on_${id}` : ''
      }`}
    >
      <img src={getEmotionImg(id)} />
      <div>{name}</div>
    </div>
  )
}
export default ImgItem
