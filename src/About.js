import React from "react";


class About extends React.Component{
    render(){
        return(
            <div className="about">
                <p>Hey! Welcome to my personal news website.<br/>
                <br/>This website collects articles from some of my favorite news sources and places them in one convenient location.<br/>
                <br/>Try clicking on one of the tabs to see the list of articles from that particular news source.<br/>
                <br/>Once you click on a particular news article, it should open up in a new tab.<br/>
                <br/>You might also notice that the article disappears from the page once you click on it!<br/>
                <br/>Happy Reading!
                </p>
            </div>
        );
    }
}

export default About;