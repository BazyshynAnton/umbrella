import { LazyLoadImage } from '../ui/reactImports/reactImports'

const ReusablePictureForLinkBlock = ({
  topPosition,
  leftPosition,
  rightPosition,
  picture,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: topPosition,
        right: rightPosition,
        left: leftPosition,
        width: '300px',
        height: '300px',
      }}
    >
      <LazyLoadImage
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={picture}
        alt="shield"
      />
    </div>
  )
}

export default ReusablePictureForLinkBlock
