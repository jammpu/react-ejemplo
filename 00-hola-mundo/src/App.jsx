import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
const user = [
    {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    }
]
export function App(){
const AMD = {initialIsFollowing: false, userName: 'AMD'}
    return (
        <section className='App'>
            {/* <TwitterFollowCard 
                initialIsFollowing = {false}
                userName="midudev" 
                name="Miguel Ängel Durán" /> */}
            {user.map(({userName, name, isFollowing}) => (
                <TwitterFollowCard key={userName} userName={userName} initialIsFollowing = {isFollowing} name={name} />
            ))}
            <TwitterFollowCard {...AMD}>
                AMD
            </TwitterFollowCard>
        </section>
    )
}