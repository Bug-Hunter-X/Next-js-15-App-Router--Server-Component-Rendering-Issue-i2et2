```javascript
// pages/index.js
export default function Home() {
  // Add error handling or adjust the component to handle server-side rendering correctly.
  try{
    return (
    <div>Hello World</div>
    );
  } catch (error) {
    console.error('Error rendering component:', error);
    return <div>An error occurred.</div>;
  }
}
```