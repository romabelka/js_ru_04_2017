import React, {Component} from 'react';
import Comments from './Comments';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isOpenComment: false
        };

        this.toggleShowComment = this.toggleShowComment.bind(this);
    }

    render() {
        const { article } = this.props;

        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                <div>
                    {this.getBody()}
                    
                </div>
            </div>
        );

    }

    toggleShowComment() {
        this.setState({
            isOpenComment: !this.state.isOpenComment
        })
    }

    getBody() {
        const article = this.props.article;

        if (!this.state.isOpen) return null;

        return (
            <div>
                <p>{article.text}</p>
                <Comments comments = {article.comments} toggleShowComment = {this.toggleShowComment}
                          showComment={this.state.isOpenComment}/>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article