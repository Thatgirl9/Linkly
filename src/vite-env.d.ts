/// <reference types="vite/client" />

declare module JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name?: string;
        className?: string;
        defaultChecked?: boolean;
        // animatedElementRef?: string | boolean;
      },
      HTMLElement
    >; // or specify the exact type if available
  }
  interface Window {
    REACT_APP_BITLY_TOKEN?: string;
  }
}
