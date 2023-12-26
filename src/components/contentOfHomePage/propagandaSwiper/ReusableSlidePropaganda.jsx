import { Box } from '../shared/ui/MUI/mui'
import { animated } from '../shared/ui/reactSpringImports/reactSpringImports'
const ReusableSlidePropaganda = ({
  stylesForPictures,
  animatedStyles,
  picture,
  textAnimation,
  stylesForQuotes,
  quote,
  text,
}) => {
  return (
    <>
      <animated.img
        style={{
          ...stylesForPictures,
          ...animatedStyles,
        }}
        src={picture}
        alt="slide"
      />
      <Box
        sx={{
          position: 'absolute',
          top: { lg: '150px', md: '100px', xs: '30px' },
          left: '85px',
          pointerEvents: 'none',
        }}
      >
        <animated.div
          style={{
            ...textAnimation,
          }}
        >
          <img style={stylesForQuotes} src={quote} alt="quotes" />
          {text}
        </animated.div>
      </Box>
    </>
  )
}

export default ReusableSlidePropaganda
