import { MainNavBar } from "./components/NavBar"
import Languages from "./components/Languages_btn"
import Switch_theme_color from "./components/Switch_theme_color_btn"
import { Hero } from "./components/Hero_Section"
import NotifTest from "./components/Notification-test"

import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <MainNavBar />
      
      <div className="container mt-2 d-flex justify-content-end">
        {/* <Languages /> */}
        
      </div>
      

      {/* <Hero />

      <NotifTest />

      <Footer /> */}
    </>
  )
}

export default App
