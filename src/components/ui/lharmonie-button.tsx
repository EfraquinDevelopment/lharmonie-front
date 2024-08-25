import { Button, ButtonProps } from "antd";
import classNames from "classnames";
import * as React from "react";

type Props = ButtonProps & {
  reversed?: boolean;
};

const LharmonieButton = ({
  className,
  children,
  reversed,
  ...props
}: Props) => {
  return (
    <Button
      type="text"
      className={classNames(className, "font-semibold rounded-none", {
        "bg-lharmonie-primary text-lharmonie-secondary hover:!bg-lharmonie-primary/80":
          reversed,
        "bg-lharmonie-secondary text-lharmonie-primary hover:!text-lharmonie-primary hover:!bg-lharmonie-secondary/90":
          !reversed,
      })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LharmonieButton;
