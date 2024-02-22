/// <reference types="vite/client" />

declare module JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name?: string;
        className?: string;
        // animatedElementRef?: string | boolean;
      },
      HTMLElement
    >; // or specify the exact type if available
  }
}
