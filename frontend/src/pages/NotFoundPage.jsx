import { useNavigate } from 'react-router-dom'
import Button from '../components/common/Button.jsx'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-projector-md font-extrabold text-primary">Page Not Found</h1>
      <p className="text-projector-sm text-ink">This page isn't available yet.</p>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  )
}

export default NotFoundPage
