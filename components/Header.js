import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Clash Royale</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>Clash of Clans</a>
        </Link>
    </div>
)

export default Header
