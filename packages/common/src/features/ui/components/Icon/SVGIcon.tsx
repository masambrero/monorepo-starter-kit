export const IconSizeName = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export const iconSize = {
  [IconSizeName.xs]: 16,
  [IconSizeName.sm]: 24,
  [IconSizeName.md]: 32,
  [IconSizeName.lg]: 40,
};

type SVGIconProps = {
  className?: string;
  color?: string;
  size?: keyof typeof IconSizeName;
  width: number;
  height: number;
  children: React.ReactNode;
};

export const SVGIcon: React.FC<SVGIconProps> = ({
  className = '',
  children,
  color = '#000',
  size = IconSizeName.sm,
  width,
  height,
  ...props
}) => {
  const sizeValue = iconSize[size];
  const multiplierWidth = sizeValue / width;
  const multiplierHeight = sizeValue / height;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      width={width * multiplierWidth}
      height={height * multiplierHeight}
      {...props}
    >
      {children}
    </svg>
  );
};
