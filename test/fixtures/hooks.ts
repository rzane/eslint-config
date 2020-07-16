import * as React from "react";

const log = false;

export const Foo = () => {
  if (log) {
    React.useEffect(() => {
      console.log("hi");
    });
  }
};
