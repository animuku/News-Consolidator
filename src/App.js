require("dotenv").config({ path: require('find-config')('.env') })
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import NYT from "./NYT";
import Guardian from "./Guardian";
import About from "./About";
import "./style.css";
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            articlesRead:[],
            articles : []
        };
    }

    articleRead=(article)=>{
        let oldArticlesRead = this.state.articlesRead;
        oldArticlesRead.push(article);
        this.setState({
            articlesRead:oldArticlesRead
        });
        // console.log(this.state.articlesRead);
    }

    render() {
      return (
            <Router>
                <div>
                    <h1>News Consolidator</h1>
                    <ul className="header">
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/nyt">New York Times</NavLink></li>
                        <li><NavLink to="/guardian">Guardian</NavLink></li>
                    </ul>
                </div>
                <div className = "Page">
                  <Switch>
                      <Route path = "/guardian"><Guardian onArticleRead={this.articleRead}/></Route>
                      <Route path ="/nyt"><NYT onArticleRead={this.articleRead}/></Route>
                      <Route path = "/"><About/></Route>
                  </Switch>
                </div>
            </Router>
      );
    }
}
ReactDOM.render(React.createElement(App),document.getElementById("root"));