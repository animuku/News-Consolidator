import React from "react";
import Article from "./Article";

class AlreadyRead extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        };
    }


    // getDerivedStateFromProps(props,state)
    // {
    //     console.log("UPDATED");
    //     if(this.props.articles.length != prevProps.articles.length)
    //     {
    //         console.log(this.props.articles);
    //         this.setState({
    //             articles:this.props.articles
    //         });
    //     }
    //     console.log(this.state.articles);
    // }
    // componentWillReceiveProps(newProps){
    //     this.setState({
    //         articles:newProps.articles
    //     });
    //     if(!Array.isArray(this.state.articles))
    //     {
    //         let old_articles = this.state.articles;
    //         this.setState({
    //             articles:[old_articles]
    //         });
    //     }
    // }


    render(){
        // let articles = this.props.articles;
        // console.log(this.state.articles);
        if(!this.state.articles.length){
            return(
                <div>
                    <h3>No articles read till now!</h3>
                </div>  
            );
        }
        else{
            return(
                <div className="Read-Articles">
                    {
                        this.state.articles.map(article=>{
                            return(
                            <Article
                            title={article.title}
                            abstract={article.abstract}
                            url={article.url}
                            img_url={article.multimedia[3].url}
                            />
                        );
                    })
                }
                </div>
            );
        }
    }
}

export default AlreadyRead;