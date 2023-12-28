const AdditionallyForSmallScreens = ({ stylesForAdditionallyLinks }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '1.3rem',
      }}
    >
      <hr
        style={{
          height: '1px',
          width: '100%',
          background: 'rgba(5, 63, 104, 0.5)',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '1rem',
          padding: '0px 48px',
          paddingBottom: '1rem',
        }}
      >
        <p style={stylesForAdditionallyLinks}>Careers</p>
        <p style={stylesForAdditionallyLinks}>Investors</p>
        <p style={stylesForAdditionallyLinks}>Contact Us</p>
      </div>
    </div>
  )
}

export default AdditionallyForSmallScreens
