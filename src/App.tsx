export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0ea5e9',
      color: 'white',
      padding: 32,
      fontFamily: 'system-ui, Arial, sans-serif'
    }}>
      <h1 style={{margin:0}}>It works! 🎉</h1>
      <p>Deployed from GitHub Pages under <code>/Portfolio/</code>.</p>
      <p>Build time: {new Date().toLocaleString()}</p>
      <a href="#/test" style={{color:'#fff', textDecoration:'underline'}}>Router test link</a>
    </div>
  );
}
