// This file allows you to provide custom React components
// to be used in MDX files. You can import and use them here.
 
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "50px", color: "blue" }}>{children}</h1>,
    // You can also import and use your own custom components.
    // import { MyComponent } from './my-component'
    // MyComponent,
    ...components,
  };
}
