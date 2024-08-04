const getColorCircleImg = (id) => {
  switch (id) {
    case 1:
      return (
        <div
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            backgroundColor: 'rgb(100, 201, 100)',
          }}
        />
      )
    case 2:
      return (
        <div
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            backgroundColor: 'rgb(157, 215, 114)',
          }}
        />
      )
    case 3:
      return (
        <div
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            backgroundColor: 'rgb(253, 206, 23)',
          }}
        />
      )

    case 4:
      return (
        <div
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            backgroundColor: 'rgb(253, 132, 70)',
          }}
        />
      )
    case 5:
      return (
        <div
          style={{
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            backgroundColor: 'rgb(253, 86, 95)',
          }}
        />
      )
    default:
      return <></>
  }
}
export default getColorCircleImg
