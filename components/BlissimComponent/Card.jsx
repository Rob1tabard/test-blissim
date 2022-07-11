import Image from "next/image";
import clsx from "clsx";

export const Card = ({ children, className, ...restProps }) => {
  return (
    <div
      className={clsx("relative rounded overflow-hidden bg-white", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

const ImageBlock = ({ className, imageProps = {} }) => {
  return (
    <span className={className}>
      <Image {...imageProps} />
    </span>
  );
};

Card.Image = ImageBlock;

const defaultContainerStyles = "p-5 flex flex-col space-y-5";
const ContentContainer = ({ children, className }) => {
  return (
    <div className={clsx(className ?? defaultContainerStyles)}>{children}</div>
  );
};

Card.ContentContainer = ContentContainer;
