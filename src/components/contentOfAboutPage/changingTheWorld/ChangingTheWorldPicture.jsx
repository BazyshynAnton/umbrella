import changingTheWorld from '../../../pictures/changingTheWorld.png'

const ChangingTheWorldPicture = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '24.5px',
        left: '0px',
        width: '300px',
        height: '300px',
      }}
    >
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={changingTheWorld}
        alt="shield"
      />
    </div>
  )
}

export default ChangingTheWorldPicture
