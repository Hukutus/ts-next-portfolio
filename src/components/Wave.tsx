import { FC, useCallback, useEffect, useState } from "react";

export type PointType = {
  x: number;
  y: number;
};

export type LineType = {
  length: number;
  angle: number;
};

export type ViewBox = {
  width: number;
  height: number;
};

export type WaveProps = {
  color?: string;
  waves?: number;
  height?: number | string;
  width?: number | string;
  viewBox?: ViewBox;
  fixedPoints?: { [key: number]: number };
  resetOnHover?: boolean;
};

const line = (a: PointType, b: PointType): LineType => {
  const lengthX: number = b.x - a.x;
  const lengthY: number = b.y - a.y;

  return {
    length: Math.sqrt(lengthX ** 2 + lengthY ** 2),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const controlPoint = (
  current: PointType,
  previous: PointType,
  next: PointType,
  reverse?: boolean,
): PointType => {
  const opposedLine: LineType = line(previous ?? current, next ?? current);

  const angle: number = opposedLine.angle + (reverse ? Math.PI : 0);
  const length: number = opposedLine.length * 0.2;

  const x: number = current.x + Math.cos(angle) * length;
  const y: number = current.y + Math.sin(angle) * length;

  return { x, y };
};

const bezierCommand = (
  point: PointType,
  i: number,
  arr: PointType[],
): string => {
  const start: PointType = controlPoint(arr[i - 1], arr[i - 2], point);
  const end: PointType = controlPoint(point, arr[i - 1], arr[i + 1], true);

  return `C ${start.x},${start.y} ${end.x},${end.y} ${point.x},${point.y}`;
};

const randomY = (viewBox: ViewBox): number =>
  viewBox.height / 3 +
  Math.floor(Math.random() * Math.floor(viewBox.height - viewBox.height / 3));

const generatePoints = (
  viewBox: ViewBox,
  amount: number,
  fixedPoints?: { [key: number]: number },
): PointType[] =>
  Array(amount + 1)
    .fill(0)
    .map((_, i) => ({
      x: (viewBox.width / amount) * i,
      y:
        fixedPoints && fixedPoints[i] !== undefined
          ? fixedPoints[i]
          : randomY(viewBox),
    }));

const svgPathD = ({ viewBox, waves, fixedPoints }: WaveProps): string => {
  // Get points
  const points: PointType[] = generatePoints(viewBox, waves || 4, fixedPoints);

  // Start at bottom left
  const pathStart = `M0,${viewBox.height},0,${points[0].y}`;

  // Build the path by looping over the points
  const d = points.reduce(
    (acc, point, i, arr) =>
      i === 0 ? "" : `${acc} ${bezierCommand(point, i, arr)}`,
    "",
  );

  // Go around to create a complete shape
  const pathEnd = `M${viewBox.width},${points[points.length - 1].y} ${
    viewBox.width
  },${viewBox.height} 0,${viewBox.height}`;

  // Combine start, generated bezier and end
  return pathStart + d + pathEnd;
};

const Wave: FC<WaveProps> = ({
  viewBox = { width: 1000, height: 200 },
  waves,
  fixedPoints,
  height,
  width,
  color,
  resetOnHover,
}: WaveProps) => {
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    setPathD(svgPathD({ viewBox, waves, fixedPoints }));
  }, [viewBox, waves, fixedPoints]);

  return (
    <>
      {viewBox ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
          height={height}
          width={width}
          onMouseEnter={() =>
            resetOnHover && setPathD(svgPathD({ viewBox, waves, fixedPoints }))
          }
        >
          <path d={pathD} fill={color ?? "#2196f3"} stroke="none" />
        </svg>
      ) : (
        <></>
      )}

      <style jsx>
        {`
          path {
            transition: 0.3s ease;
          }

          svg {
            transform-origin: bottom;
            animation: animateWave 0.3s ease forwards;
          }

          @keyframes animateWave {
            0% {
              transform: scale(1, 0);
            }
            100% {
              transform: scale(1, 1);
            }
          }
        `}
      </style>
    </>
  );
};

export default Wave;
