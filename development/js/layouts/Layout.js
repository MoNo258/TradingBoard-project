/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import routes from "../router";
// import logo from "../../public/logo.png";

import firebase from "../firebase/firebase.config";

var ps;
const auth = firebase.auth;

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "blue",
            sidebarOpened:
                document.documentElement.className.indexOf("nav-open") !== -1,
            authenticated: false,
            routesUser: routes.slice(0, 5), //routes for logged in user
            routesNonUser: routes.slice(0, 3).concat(routes.slice(5)), //routes for stranger
        };
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(this.refs.mainPanel, {suppressScrollX: true});
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        //checking if user is logged in so that routes can be displayed based on authenticated parameter
        auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({authenticated: true})
            } else {
                this.setState({authenticated: false})
            }
        });

    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
    }

    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            if (navigator.platform.indexOf("Win") > -1) {
                let tables = document.querySelectorAll(".table-responsive");
                for (let i = 0; i < tables.length; i++) {
                    ps = new PerfectScrollbar(tables[i]);
                }
            }
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    // this function opens and closes the sidebar on small devices
    toggleSidebar = () => {
        document.documentElement.classList.toggle("nav-open");
        this.setState({sidebarOpened: !this.state.sidebarOpened});
    };
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/main") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    handleBgClick = color => {
        this.setState({backgroundColor: color});
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    render() {
        return (
            <>
                <div className="wrapper">
                    <Sidebar
                        {...this.props}
                        routes={this.state.authenticated === true ? this.state.routesUser : this.state.routesNonUser}
                        bgColor={this.state.backgroundColor}
                        logo={{
                            outterLink: "/",
                            text: "Ex_Rates Board",
                            // imgSrc: logo
                            imgSrc: 'https://cdn.pixabay.com/photo/2017/01/25/17/33/diagram-2008478_960_720.png'
                        }}
                        toggleSidebar={this.toggleSidebar}
                    />
                    <div
                        className="main-panel"
                        ref="mainPanel"
                        data={this.state.backgroundColor}
                    >
                        <MainNavbar
                            {...this.props}
                            brandText={this.getBrandText(this.props.location.pathname)}
                            toggleSidebar={this.toggleSidebar}
                            sidebarOpened={this.state.sidebarOpened}
                        />
                        <Switch>
                            {this.state.authenticated === true ? this.getRoutes(this.state.routesUser) : this.getRoutes(this.state.routesNonUser)}
                            <Redirect from="*" to="/main/dashboard"/>
                        </Switch>
                        {// we don't want the Footer to be rendered on map page
                            this.props.location.pathname.indexOf("maps") !== -1 ? null : (
                                <Footer fluid/>
                            )}
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
