import { Image } from "@illa-design/image"
import { FC } from "react"
import { WrappedImageProps } from "./interface"
import { withParser } from "../parserHOC"
import { TooltipWrapper } from "../TooltipWrapper"

export const IMAGE_WIDGET_CONFIG = {
  type: "IMAGE_WIDGET",
  defaults: {
    rows: 50,
    columns: 500,
    widgetName: "image",
    version: "0.0.1",
    src: "https://placekitten.com/400/300",
  },
}

export const WrappedImage: FC<WrappedImageProps> = (props) => {
  const { src, altText, radius, tooltipText, width, height } = props
  return (
    <TooltipWrapper
      tooltipText={tooltipText}
      disabled={!tooltipText}
      position="top"
    >
      <Image
        fallbackSrc={src}
        alt={altText}
        radius={radius}
        height={height}
        width={width}
      />
    </TooltipWrapper>
  )
}

export const WrappedImageWidget = withParser(WrappedImage)
WrappedImageWidget.displayName = "ImageWidget"
