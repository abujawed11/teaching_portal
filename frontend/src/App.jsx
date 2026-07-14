
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ClassSelectionPage from './pages/ClassSelectionPage.jsx'
import SubjectSelectionPage from './pages/SubjectSelectionPage.jsx'
import ChapterSelectionPage from './pages/ChapterSelectionPage.jsx'
import TopicSelectionPage from './pages/TopicSelectionPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/class" element={<ClassSelectionPage />} />
      <Route path="/class/:classId/subject" element={<SubjectSelectionPage />} />
      <Route
        path="/class/:classId/subject/:subjectId/chapter"
        element={<ChapterSelectionPage />}
      />
      <Route
        path="/class/:classId/subject/:subjectId/chapter/:chapterId/topic"
        element={<TopicSelectionPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
