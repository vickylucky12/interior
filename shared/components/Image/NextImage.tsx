import Image from 'next/image'

interface I_NextImage {
  src: string
  alt: string
  width: number
  height: number
  objectFit: 'contain' | 'cover' | 'fill'
  layout?: 'fixed' | 'responsive' | 'raw' | 'intrinsic' | 'fill'
  priority?: boolean
  rest?: any
}

const NextImage = ({
  src,
  alt,
  width,
  height,
  objectFit,
  layout,
  priority,
  ...rest
}: I_NextImage) => {
  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

  const toBase64 = (str: any) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width, height)
      )}`}
      objectFit={objectFit}
      layout={layout}
      priority={priority}
      {...rest}
    />
  )
}

export default NextImage
