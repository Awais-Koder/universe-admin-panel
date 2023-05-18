import React, { useState } from "react"
import { Layout, Menu } from "antd"
import { items } from "../../components/dashboard/SidebarItems"
import Pages from "./Pages"
import { Link } from "react-router-dom"
import logo from '../../assets/images/universe.png'


const { Header, Sider } = Layout;

export default function Index() {

    const [collapsed, setCollapsed] = useState(false);
    const year = new Date().getFullYear()

    return (
        <Layout>

            <Header className="position-sticky ps-4 top-0 " style={{zIndex:100}}>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="universe" className="img-fluid" style={{height:20}}/>
                    </Link>
                </div>
            </Header>
            <Layout>

                <Sider
                    breakpoint="lg"
                    width={220}
                    className="position-fixed vh-100 bg-dark"
                    style={{ top: 64 }}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={value => setCollapsed(value)}
                >
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        style={{
                            height: "100%",
                            borderRight: 0,
                        }}
                        items={items}
                    />
                </Sider>

                <Layout className="p-4" style={{ marginLeft: !collapsed ? 220 : 80, transition: "all 0.2s" }}>

                    <Pages />

                    <footer className="mt-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="mb-0 text-center">&copy; {year}. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </footer>

                </Layout>
            </Layout>
        </Layout >
    )
}