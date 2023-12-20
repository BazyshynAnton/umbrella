import meetUmbrellaProtection from '../../../../pictures/meetUmbrellaProtection.png'

const Shield = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '22.5px',
        right: '0px',
        width: '300px',
        height: '300px',
      }}
    >
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={meetUmbrellaProtection}
        alt="shield"
      />
    </div>
  )
}

export default Shield
