1. Create A project in Google Cloud Platform and generate OAuth 2.0 Client IDs, get client id and client secret
2. Enable Google Service you want to integrate (For me it's Google Drive)
3. Configure redirect url, (make sure to set root as Callback url because you can't set redirect url with hash)
  EXAMPLE
  Production: https://hermilanastacio.github.io/cloudstorage/
  Development: http://localhost:3000/callback/

  It must be the same on the .env and what's on google api config
4. Setup React-Router
  Example:
    <HashRouter basename={process.env.REACT_PUBLIC_URL}>
    <Route exact path="/">
      <Callback />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </HashRouter>
5. DONE!!!