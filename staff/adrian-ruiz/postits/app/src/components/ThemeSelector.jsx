import {useEffect, useState} from 'react'
import './ThemeSelector.css'

function ThemeSelector () {
    const [theme, setTheme] = useState(localStorage.theme)

    useEffect(() => {
        
        const root = document.querySelector('#root')
        if(localStorage.theme === 'dark_mode'){
            root.classList.add('darkTheme')
            root.classList.remove('lightTheme')
        }else{
            root.classList.add('lightTheme')
            root.classList.remove('darkTheme')
        }
        
    }, []);
    


    const handleChangeTheme = () => {
       

        const root = document.querySelector('#root')
        root.classList.toggle('lightTheme')
        root.classList.toggle('darkTheme')
        
        if(theme === 'dark_mode'){
            setTheme('light_mode')
            localStorage.setItem('theme', 'light_mode')
        }else{
            setTheme('dark_mode')
            localStorage.setItem('theme', 'dark_mode')
        }
    }
    return <span className="themeSelector material-symbols-outlined" onClick={handleChangeTheme}>
        {theme === 'light_mode' ? 'dark_mode' : 'light_mode'  }
    </span>
}

export default ThemeSelector