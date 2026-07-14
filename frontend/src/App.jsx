
import { motion } from "framer-motion"

function App() {

  return (
    <>
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello world!
      </motion.h1>
    </>
  )
}

export default App
