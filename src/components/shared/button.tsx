import clsx from 'clsx';
import { ComponentPropsWithRef, PropsWithChildren } from 'react';

type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'normal' | 'primary' | 'destructive';
  size?: 'normal' | 'small';
};

const Button = ({
  variant,
  size,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={clsx(variant, size, className)}
      {...props}
    />
  );
};

export default Button;
