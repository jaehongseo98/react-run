function Header(text) {
    let h1 = document.createElement('h1')
    h1.innerText = text
    document.body.appendChild(h1)
}

Header("제목")