import React, { Component } from "react";
import {TabBar} from "antd-mobile";
import {
    Home,
    Mine,
    News,
    Shopping
    
} from "../../views";
import {withRouter} from "react-router-dom";
 class TabBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            fullScreen: true,
        };
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            //background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            //background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                       }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                            this.props.history.push("/home");
                            document.title = "首页";
                        }}
                        data-seed="logId"
                    >
                        
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                //background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                //background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="商城"
                        key="shopping"
                        selected={this.state.selectedTab === 'shopping'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'shopping',
                            });
                            this.props.history.push("/shopping");
                            document.title = "商城";
                        }}
                        data-seed="logId1"
                    >
                        
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                //background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                //background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="消息"
                        key="news"
                        selected={this.state.selectedTab === 'news'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'news',
                            });
                            this.props.history.push("/news");
                            document.title = "消息";
                        }}
                    >
                        
                    </TabBar.Item>
                    <TabBar.Item
                        //icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        //selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key="mine"
                        selected={this.state.selectedTab === 'mine'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mine',
                            });
                            this.props.history.push("/mine");
                            document.title = "我的";
                        }}
                    >
                        
                    </TabBar.Item>
                    
                </TabBar>
            </div>
        )
    }
}


export default withRouter(TabBarCom);
