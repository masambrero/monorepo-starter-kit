import NextLink from 'next/link';

type LinkProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  inNewTab?: boolean;
};

const newTabParams = {
  target: '_blank',
};

export const Link = ({
  href,
  className,
  children,
  inNewTab = false,
  ...props
}: LinkProps) => {
  if (!href) {
    return (
      <span className={className} {...props}>
        {children}
      </span>
    );
  }

  const isExternal = !href.startsWith('/');
  const newTabProps = inNewTab ? newTabParams : {};

  return isExternal ? (
    <a href={href} className={className} {...props} {...newTabProps}>
      {children}
    </a>
  ) : (
    <NextLink
      href={href}
      passHref
      className={className}
      {...props}
      {...newTabProps}
    >
      {children}
    </NextLink>
  );
};
