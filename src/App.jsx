import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ProgrammingProvider } from './features/programming/context/ProgrammingContext'

export default function App() {
  return (
    <BrowserRouter>
      <ProgrammingProvider>
        <AppRoutes />
      </ProgrammingProvider>
    </BrowserRouter>
  )
}
