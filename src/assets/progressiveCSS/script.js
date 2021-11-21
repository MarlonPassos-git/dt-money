const REM = 16;
const MOBILE_WIDTH = 375;
const DECKTOP_WIDTH = 1440;

function _PXtoRem(number, reminPX = REM) {
    return number / reminPX;
}

export function PXtoRem(number, reminPX = REM) {
    return `${number / reminPX}rem`;
}

export function progressive(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const minSize = _PXtoRem(minSizePx);
    const maxSize = _PXtoRem(maxSizePx);
    const minWidth = _PXtoRem(minWidthPx);
    const maxWidth = _PXtoRem(maxWidthPx);
    const slope = (maxSize - minSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minSize

    return `calc( ${yAxisIntersection}rem + ${slope * 100}vw )`;
}

export function progressiveClamp(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const minSize = Math.min(minSizePx, maxSizePx);
    const maxSize = Math.max(minSizePx, maxSizePx);
    const minSizeRem = _PXtoRem(minSize);
    const maxSizeRem = _PXtoRem(maxSize);

    return `clamp(${minSizeRem}rem, ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem)`
}

export function progressiveMax(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const maxSize = Math.max(minSizePx, maxSizePx);
    const maxSizeRem = _PXtoRem(maxSize);

    return `min( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${maxSizeRem}rem)`
}

export function progressiveMin(minSizePx, maxSizePx, minWidthPx = MOBILE_WIDTH, maxWidthPx = DECKTOP_WIDTH) {
    const minSize = Math.min(minSizePx, maxSizePx);
    const minSizeRem = _PXtoRem(minSize);

    return `max( ${progressive(minSizePx, maxSizePx, minWidthPx, maxWidthPx)}, ${minSizeRem}rem)`
}
