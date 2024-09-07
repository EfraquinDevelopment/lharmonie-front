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
      size="large"
      className={classNames(
        className,
        "font-semibold rounded-3xl hover:!bg-lharmonie-hover/70 hover:!text-lharmonie-primary",
        {
          "bg-lharmonie-primary text-lharmonie-secondary": reversed,
          "bg-lharmonie-hover/80 text-lharmonie-primary": !reversed,
        }
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default LharmonieButton;
