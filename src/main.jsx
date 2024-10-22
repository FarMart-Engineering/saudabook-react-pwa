import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { getApplicationRoutes } from './routes/router'
import { Provider } from 'react-redux'
import { store } from './store/store'
import MuiThemeProvider from './providers/MuiThemeProvider'
import "./index.css";

// FETCHING ALL ROUTES FOR USE; 
// SEE src/routes/router.jsx
const applicationRoutes = getApplicationRoutes();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <MuiThemeProvider>
      <Provider store={store}>
        <RouterProvider router={applicationRoutes} />
      </Provider>
    </MuiThemeProvider>
    {/* </Suspense> */}
  </StrictMode>
)
