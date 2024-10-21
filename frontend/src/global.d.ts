declare module "*.svg?react" {
    import * as React from "react";
  
    const ReactComponent: React.FC<
      React.ComponentProps<"svg"> & { title?: string }
    >;
  
    export default ReactComponent;
  }