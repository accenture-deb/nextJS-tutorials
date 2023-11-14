'use client'
import { useRouter } from "next/navigation"
const NavigationButton = () => {
    const route = useRouter();
    const pageNav = (routeName) => {
        route.push(routeName)
    }
    return (
        <div>
            <button onClick={() => { pageNav('/') }}>Home</button>
            <br /><br />
            <button onClick={() => { pageNav('/about/about-service') }}>About Service</button>
        </div>
    )
}

export default NavigationButton