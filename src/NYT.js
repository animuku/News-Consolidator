import React from "react";
import Article from "./Article";

class NYT extends React.Component{
    constructor(props){
        super(props);


        this.state={
            articles:[]
        };
    }

    urlClicked=(url)=>{
        let indexToBeRemoved;
        let elementRead;
        for(const[index,element] of this.state.articles.entries()){
            if(element.url == url)
            {
                indexToBeRemoved = index;
                elementRead = element;
                break;
            }
        }
        let old_articles = this.state.articles;
        old_articles.splice(indexToBeRemoved,1);
        this.setState({
            articles:old_articles
        });
        this.articleRemoved(elementRead);
    }

    articleRemoved = (element)=>{
        this.props.onArticleRead(element);
    }
    componentDidMount(){
        fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2o9jHHA0U5ntE6BV4pFLvacirGdWAiOK")
        .then(response=>response.json())
        .then(data=>
            {
                if(Array.isArray(data.results)){
                    this.setState({
                        articles:data.results
                    }); 
                }

                else{
                    this.setState({
                        articles:[data.results],
                });
                }
        });
    }

    render(){
        return (
            <div className = "NYT-Articles">
                {
                    this.state.articles.map(article=>{
                        return (
                            <Article
                            title={article.title}
                            abstract={article.abstract}
                            url={article.url}
                            img_url={article.multimedia[3].url}
                            onURLClicked = {this.urlClicked}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
export default NYT;