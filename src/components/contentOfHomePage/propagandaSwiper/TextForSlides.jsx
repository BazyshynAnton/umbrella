import { Typography } from '../shared/ui/MUI/mui'
import { usePropagandaSwiperContext } from '../../../context/PropagandaSwiperContext'

export const TextForSlide1 = () => {
  const { stylesForTextInSlides } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
      Protect Yourself
      <br />
      <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
        and Others:
      </Typography>
      <br />
      Vaccination - the key
      <br /> to a safer tomorrow!
    </Typography>
  )
}
export const TextForSlide2 = () => {
  const { stylesForTextInSlides } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
      Together
      <br />
      we are stronger:
      <br />
      protect yourself
      <br />
      <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
        and your loved
      </Typography>
      <br />
      ones with the vaccine!
    </Typography>
  )
}
export const TextForSlide3 = () => {
  const { stylesForTextInSlides } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
      Take
      <br />
      the Umbrella vaccine
      <br />
      to strengthen
      <br />
      <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
        the immune system
      </Typography>
    </Typography>
  )
}
export const TextForSlide4 = () => {
  const { stylesForTextInSlides } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
      Umbrella:
      <br />
      Innovations
      <br />
      <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
        with
      </Typography>
      <br />
      Responsibility
    </Typography>
  )
}
