import "./App.css"
import ScoreCard from './components/ScoreCard'
import PlayBoard from './components/PlayBoard'
import RulesModal from './components/RulesModal'

function App() {
  return (
    <div className="App">
      <ScoreCard />
      <PlayBoard />
      <RulesModal />
    </div>
  )
}

export default App