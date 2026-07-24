import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      <p className="font-display text-2xl text-navy dark:text-mint">DW Portfolio</p>
      <ThemeToggle />
    </div>
  )
}

export default App