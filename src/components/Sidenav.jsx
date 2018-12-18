import React from 'react';
import {NavLink} from 'react-router-dom';


const Sidenav = ({topics}) => {
    return (
        <aside className='mdc-permanent-drawer'>
            <nav className='mdc-list mdc-list--avatar-list'>
                {topics.map(topic =>
                    <NavLink
                        key={topic.id}
                        to={`/books/${topic.id}`}
                        activeClassName='mdc-list-item--active'
                        className='mdc-list-item'>
                        <img src={`/img/topics/${topic.id}.svg`} className='mdc-list-item__start-detail' alt={topic.id}/>
                            <span className='mdc-list-ite-span'>{topic.title}</span>
                    </NavLink>
                )}
            </nav>
        </aside>
    );
}

export default Sidenav;
