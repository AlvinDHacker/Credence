import React, { type ReactNode } from "react";
import { Providers } from "../_components/providers";

const layout = (props: { children: ReactNode }) => {
  return (
    <div>
      <Providers>{props.children}</Providers>
    </div>
  );
};

export default layout;
