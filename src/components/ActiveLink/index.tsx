import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExectHref?: boolean;
}

export const ActiveLink = ({
  children,
  shouldMatchExectHref = false,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExectHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExectHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "blue.900" : "gray.50" })}
    </Link>
  );
};
