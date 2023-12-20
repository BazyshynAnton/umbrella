import delivering from '../../../pictures/delivering.png'

const DeliveringPicture = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '49.5px',
        right: '0px',
        width: '300px',
        height: '300px',
      }}
    >
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={delivering}
        alt="shield"
      />
    </div>
  )
}

export default DeliveringPicture
