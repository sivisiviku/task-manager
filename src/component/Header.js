import './Header.css'
import { useRef } from 'react'

function Header(props) {
    const keyword = useRef()

    function handleSearch() {
        props.handleSearch(keyword.current.value)
    }

    return <nav>
        <div style={{marginRight: '10px'}}>
            <input ref={keyword} style={{marginRight: '5px'}} type='text' placeholder='search...'></input>
            <button onClick={handleSearch}>Search</button>
        </div>
        <button onClick={() => props.newTask(true)}>New Task</button>
    </nav>
}

export default Header