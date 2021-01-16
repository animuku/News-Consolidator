import React from "react";
class Article extends React.Component{
    handleURLClicked = ()=>{
        window.open(this.props.url);
        this.props.onURLClicked(this.props.url);
    }
    render(){
        const{title,abstract,_,img_url} = this.props;
        return (
            <div>
                <div className="image-container">
                    <img src ={img_url}/>
                </div>
                <div className = "article">
                <a target="_blank" onClick={this.handleURLClicked}>{title}</a>
                {/* onClick={this.handleURLClicked} */}
                <h2>{abstract}</h2>
                </div>
            </div>
        );
    }
}
export default Article;