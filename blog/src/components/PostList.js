import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {
    
    componentDidMount = () => {
        this.props.fetchPostsAndUsers();
    }
    
    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={ post.id }>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h3>{ post.title }</h3>
                            <p>{ post.body }</p>
                        </div>
                        <UserHeader userId={ post.userId } />
                    </div>
                </div>
            );
        });
    };
    
    render() {
        return (
            <div className="ui relaxed divided list">
                { this.renderList() }
            </div>
        );  
    };
};

const mapDispatchToProps = {
    fetchPostsAndUsers  
};

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts  
    };  
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);