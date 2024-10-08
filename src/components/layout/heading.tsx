import Title, { TitleProps } from "antd/es/typography/Title";
import classNames from "classnames";

type Props = TitleProps & {
  reversed?: boolean;
};

const Heading = ({ children, className, reversed }: Props) => {
  return (
    <Title
      className={classNames(className, "!text-3xl !font-medium", {
        "!text-lharmonie-primary": reversed,
        "!text-lharmonie-hover": !reversed,
      })}
    >
      {children}
    </Title>
  );
};

export default Heading;
