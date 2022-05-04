import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

interface Props extends SvgProps {
    iconColor?: string
}

const CheckIcon = ({iconColor, ...props}: Props) => {
    return (
        <Svg
            width={18}
            height={18}
            fill="none"
            {...props}
        >
            <Circle cx={9} cy={9} r={9} fill={iconColor || "#E68D06"} />
            <Path
                d="M3.513 9.703A.896.896 0 0 1 4.78 8.435l2.31 2.31.176.176.177-.177 5.232-5.232a.896.896 0 0 1 1.267 1.268L7.9 12.822a.897.897 0 0 1-1.268 0l-3.12-3.12Z"
                fill="#fff"
                stroke={iconColor || "#E68D06"}
                strokeWidth={0.5}
            />
        </Svg>
    )
}

export default CheckIcon
