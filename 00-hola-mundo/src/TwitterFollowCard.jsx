import { useState } from "react";
export function TwitterFollowCard({children, userName, name, initialIsFollowing}) {
    // const imageSrc = 'https://unavatar.io/${userName}';
    // <img className='tw-followCard-avatar' src={imageSrc} alt="avatar" />
    // const addAt = userName => `@${userName}`;
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 
        'tw-followCard-button isFollowing' : 
        'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name} {children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followcard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    );
}
