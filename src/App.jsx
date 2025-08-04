import { useEffect, useState } from 'react';

function App() {
  const [response, setResponse] = useState("Waiting...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      setResponse("❌ No ?code= in URL.");
      return;
    }

    fetch(`http://localhost:3600/syndicate/oauth?code=${encodeURIComponent(code)}`)
      .then(res => res.text())
      .then(data => setResponse(`✅ Response:\n${data}`))
      .catch(err => setResponse(`❌ Error:\n${err.message}`));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Instagram OAuth Callback Test</h1>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
