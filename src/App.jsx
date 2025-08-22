import './App.css'
import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Hello World!</h1>
      <p>Welcome to React with Vite</p>
      <Datepicker />
    </div>
  )
}

export default App
