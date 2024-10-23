declare module "*.svg?react" {
    import * as React from "react";
  
    const ReactComponent: React.FC<
      React.ComponentProps<"svg"> & { title?: string }
    >;

    export default ReactComponent;
}

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                expand: () => void;
                ready: () => void;
                disableVerticalSwipes: () => void;
            };
        };
    }
}

export {};