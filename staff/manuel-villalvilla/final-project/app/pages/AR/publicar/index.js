import { useRouter } from "next/router"
import Header from '../../../components/Header'

export default function () {
    const router = useRouter()
    const handleFiltersMenuClick = () => {
        router.push('./home')
    }
    return <div className="container">
        <Header onFiltersMenuClick={handleFiltersMenuClick} />
        
    </div>
}