# Next.js 15 App Router: Server Component Rendering Issue

This repository demonstrates a bug encountered in Next.js 15's App Router when using server components. The issue involves unexpected behavior where a server component renders correctly on the client-side but fails on the server-side. This leads to inconsistencies and potential errors in server-side rendering (SSR).

## Bug Description

The core issue is that a simple server component (in this example, the `Home` component) exhibits different behavior between server-side and client-side rendering.  While client-side rendering functions without errors, the server-side rendering results in an unexpected failure. The exact cause is currently under investigation, and we hope to provide a solution and a more detailed analysis soon.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the client-side rendering which works correctly.
5. Attempt to render server side which fails.

## Expected Behavior

The component should render consistently, whether on the client or the server, producing the expected output: "Hello World".

## Actual Behavior

The client rendering works as expected, but the server side rendering throws an error. Please refer to the console for details.

## Solution

[Insert solution here and update the bugSolution.js file accordingly]
