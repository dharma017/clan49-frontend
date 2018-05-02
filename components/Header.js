import Link from 'next/link'

import { Layout,Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div id="menu">
    <Menu
      // onClick={this.handleClick}
      // selectedKeys={[this.state.current]}
      mode="horizontal"
    >

      <SubMenu title={<span>Clash Royale</span>}>
        <Menu.Item key="cr">
          <Link href="/">
            <a style={linkStyle}>Clan</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="clanwar">
          <Link href="/clanwar">
            <a style={linkStyle}>War Log</a>
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu title={<span>Clash of Clans</span>}>
        <Menu.Item key="coc">
          <Link href="/coc">
            <a style={linkStyle}>Clan</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="currentwar">
          <Link href="/currentwar">
            <a style={linkStyle}>Current War</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="warlog">
          <Link href="/warlog">
            <a style={linkStyle}>War Log</a>
          </Link>
        </Menu.Item>
      </SubMenu>

    </Menu>
  </div>
);

export default Header
