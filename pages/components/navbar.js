import {useState } from 'react'

export default function Navbar() {

    const [tabs, setTabs] = useState(["home", "resume", "credits"]);

    const buttons = tabs.map((tab) => <button key={tab}>{tab}</button>)

    return (
        <div>{buttons}</div>
    )
}