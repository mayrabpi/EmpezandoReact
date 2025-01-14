import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Migel Ángel" />
            <TwitterFollowCard userName="miduddev" name="Migel Ángel duran" />
            <TwitterFollowCard userName="midudev" name="Migel Ángel perez " />
        </section>


    )
}