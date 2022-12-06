import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createRoot(document.getElementById('root') as HTMLElement)

app.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
