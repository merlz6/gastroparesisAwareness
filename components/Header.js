import Link from 'next/link';


const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div className="head">
  <div className="LeftSideLinks">
    <Link href="/">
      <a className='logo' style={linkStyle}>Gastroparesis </a>
    </Link>
    </div>
    <div className='rightSideLinks'>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/symptoms">
      <a style={linkStyle}>Symptoms</a>
    </Link>
    <Link href="/diet">
      <a style={linkStyle}>Diet</a>
    </Link>
    <Link href="/more">
      <a style={linkStyle}>More</a>
    </Link>
    </div>
  </div>
)

export default Header
