import Header from "./components/layout/Header.jsx"
import Sidebar from "./components/layout/Sidebar.jsx"
import MainContent from "./components/layout/MainContent.jsx"
import Footer from "./components/layout/Footer.jsx"

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1">
          <MainContent />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App