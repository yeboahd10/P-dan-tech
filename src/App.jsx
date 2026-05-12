
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ProjectsPage from './components/projects/ProjectsPage'
import SpicardsPrivacyPage from './components/spicards/SpicardsPrivacyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/spicards/privacy-policy" element={<SpicardsPrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
