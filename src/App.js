import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NYT from "./NYT";
import Guardian from "./Guardian";
import AlreadyRead from "./AlreadyRead";
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
          <div className = "Page">
              <Router>
                  <Switch>
                      <Route path ="/read"><AlreadyRead articles={this.state.articlesRead}/></Route>
                      <Route path = "/guardian"><Guardian onArticleRead={this.articleRead}/></Route>
                      <Route path ="/"><NYT onArticleRead={this.articleRead}/></Route>
                  </Switch>
              </Router>
          </div>
      );
    }
}
ReactDOM.render(React.createElement(App),document.getElementById("root"));