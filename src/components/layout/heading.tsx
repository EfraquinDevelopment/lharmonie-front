import Title, { TitleProps } from "antd/es/typography/Title";
import classNames from "classnames";

type Props = TitleProps & {
  reversed?: boolean;
};

const replaceAccents = (text: string) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Heading = ({ children, className, reversed }: Props) => {
  const formattedChildren =
    typeof children === "string" ? replaceAccents(children) : children;

  return (
    <Title
      className={classNames(
        className,
        "!text-2xl !font-medium !font-[HeadingFont]",
        {
          "!text-lharmonie-primary": reversed,
          "!text-lharmonie-secondary": !reversed,
        }
      )}
    >
      {formattedChildren}
    </Title>
  );
};

export default Heading;
