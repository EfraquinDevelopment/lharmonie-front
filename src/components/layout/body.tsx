import classNames from "classnames";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

const Body = ({ className, children }: Props) => {
  return (
    <p
      className={classNames(
        className,
        "text-lg 2xl:text-xl text-lharmonie-secondary"
      )}
    >
      {children}
    </p>
  );
};

export default Body;
