import React, { ComponentProps } from "react";

type AProps = ComponentProps<'a'>
type IProps = {
  children: React.ReactNode,
}
export default function Title({children}: IProps, props: AProps): JSX.Element {
  return (
    <div>
      <a
        href="https://apod.nasa.gov/apod/astropix.html"
        target="_blank"
        className="text-6xl  font-bold flex justify-center cursor-pointer font-Handjet "
        {...props}
        >
          {children}
      </a>
    </div>
  );
}
