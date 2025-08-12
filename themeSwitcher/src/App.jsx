import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'
import useTheme from './Context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);

  return (
<ThemeProvider value={{themeMode, lightTheme, darkTheme}} className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg">
  <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
      </div>
  </div>
</ThemeProvider>
  )
}

export default App
