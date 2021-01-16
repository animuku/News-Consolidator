import React from "react";
import Article from "./Article";

class Guardian extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            articles:[]
        };
    }

    urlClicked=(url)=>{
        let indexToBeRemoved;
        for(const[index,element] of this.state.articles.entries()){
            if(element.webUrl == url)
            {
                indexToBeRemoved = index;
                break;
            }
        }
        let old_articles = this.state.articles;
        old_articles.splice(indexToBeRemoved,1);
        this.setState({
            articles:old_articles
        });
    }

    componentDidMount(){
        fetch("https://content.guardianapis.com/search?q=football&api-key=5630b754-e925-4460-a881-97f28ddf1564&order-by=newest&show-fields=thumbnail,trailText")
        .then(data=>data.json())
        .then(data=>{
            if(Array.isArray(data.response.results))
            {
                this.setState({
                    articles:data.response.results
                })
            }

            else
            {
                this.setState({
                    articles:[data.response.results]
                })
            }
        });
    }

    render(){
        return(
            <div className="Guardian-Article">
                {
                    this.state.articles.map(article=>{
                        return(
                            <Article
                            title={article.webTitle}
                            abstract={article.fields.trailText}
                            url={article.webUrl}
                            img_url={article.fields.thumbnail}
                            onURLClicked={this.urlClicked}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Guardian;