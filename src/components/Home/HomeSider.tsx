import * as React from "react";
import { Layout, Menu, Icon, Row } from "antd";
import { Link } from "react-router-dom";

import routesConfig from "../../routes/config";
import { IMenuItem, IMenuModel } from "./../../routes/config";
import "./HomeSider.scss";

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

interface IHomeSiderProps {
  isMenuCollapsed: boolean;
}

interface IHomeSiderState {}

class HomeSiderComp extends React.Component<IHomeSiderProps, IHomeSiderState> {
  constructor(props: IHomeSiderProps) {
    super(props);
  }

  renderMenuItem(item: IMenuItem): React.ReactNode {
    if (item.display) {
      return (
        <Item key={item.key ? item.key : item.path}>
          <Link to={item.path}>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.title}</span>
          </Link>
        </Item>
      );
    }
    return <div></div>;
  }
  renderMenuSubMenu(item: IMenuModel): React.ReactNode {
    if (!item.subMenu) {
      var renderItem: IMenuItem = {
        key: item.key,
        path: item.path,
        display: true,
        title: item.title,
        icon: item.icon,
        component: item.component
      };
      return this.renderMenuItem(renderItem);
    }
    console.log(item.key ? item.key : item.path);

    return (
      <SubMenu
        key={item.key ? item.key : item.path}
        title={
          <span>
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
          </span>
        }
      >
        {item.subMenu.map(item => this.renderMenuItem(item))}
      </SubMenu>
    );
  }
  render() {
    return (
      <Sider trigger={null} collapsed={this.props.isMenuCollapsed} collapsible>
        <Menu theme="dark" mode="inline">
          {routesConfig.map(item => {
            return this.renderMenuSubMenu(item);
          })}
        </Menu>
      </Sider>
    );
  }
}

export default HomeSiderComp;
