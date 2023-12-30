const AdditionallyForSmallScreens = ({ stylesForAdditionallyLinks, t }) => {
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
        <p style={stylesForAdditionallyLinks}>{t('Careers')}</p>
        <p style={stylesForAdditionallyLinks}>{t('Investors')}</p>
        <p style={stylesForAdditionallyLinks}>{t('Contact Us')}</p>
      </div>
    </div>
  )
}

export default AdditionallyForSmallScreens
