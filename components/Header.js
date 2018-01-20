import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Clash Royale</a>
    </Link>
    <Link href="/coc">
      <a style={linkStyle}>Clash of Clans</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact Us</a>
    </Link>
  </div>
);

export default Header
