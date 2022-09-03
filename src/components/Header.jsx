import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img src="src/assets/me.jpeg" alt="My profile picture" />
            <h1>Tanay Lodh</h1>
            <p>Front end developer</p>
            <a href="https://github.com/tonoyondaweb" className="site">My GitHub</a>
            <button className="email">
                <a href="mailto:iamtanaylodh@gmail.com">
                    <i class="fa-solid fa-envelope"></i>
                    Email
                </a>
            </button>
        </header>
    )
}