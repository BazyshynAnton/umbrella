import { Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { usePropagandaSwiperContext } from '../../../context/PropagandaSwiperContext'

export const TextForSlide1 = () => {
  const { styles } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      Protect Yourself
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        and Others:
      </Typography>
      <br />
      Vaccination - the key
      <br /> to a safer tomorrow!
    </Typography>
  )
}
export const TextForSlide2 = () => {
  const { styles } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      Together
      <br />
      we are stronger:
      <br />
      protect yourself
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        and your loved
      </Typography>
      <br />
      ones with the vaccine!
    </Typography>
  )
}
export const TextForSlide3 = () => {
  const { styles } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      Take
      <br />
      the Umbrella vaccine
      <br />
      to strengthen
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        the immune system
      </Typography>
    </Typography>
  )
}
export const TextForSlide4 = () => {
  const { styles } = usePropagandaSwiperContext()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      Umbrella:
      <br />
      Innovations
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        with
      </Typography>
      <br />
      Responsibility
    </Typography>
  )
}
