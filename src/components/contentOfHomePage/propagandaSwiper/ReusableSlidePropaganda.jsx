import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { animated } from '../../shared/ui/reactSpringImportsGlobal/reactSpringImportsGlobal'

const ReusableSlidePropaganda = ({
  stylesForPictures,
  scaleAnimation,
  picture,
  textAnimation,
  stylesForQuotes,
  quote,
  text,
}) => {
  return (
    <>
      <animated.div
        style={{
          ...stylesForPictures,
          ...scaleAnimation,
        }}
      >
        {picture}
      </animated.div>
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
          <LazyLoadImage
            className="swiper-lazy"
            style={stylesForQuotes}
            src={quote}
            alt="quotes"
          />
          {text}
        </animated.div>
      </Box>
    </>
  )
}

export default ReusableSlidePropaganda
