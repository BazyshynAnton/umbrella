import lifeAtUmbrellaPicture from '../../../../pictures/lifeAtUmbrellaPicture.png'

const LifePicture = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '13.5px',
        left: '0px',
        width: '300px',
        height: '300px',
      }}
    >
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={lifeAtUmbrellaPicture}
        alt="life"
      />
    </div>
  )
}

export default LifePicture
