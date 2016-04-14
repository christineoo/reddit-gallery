import React, { PropTypes, Component } from 'react'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox';

export default class Posts extends Component {
  render() {
    return (
      <List selectable ripple>
        {this.props.posts.map((post, i) =>
          <ListItem key={i} caption={post.title} to={post.url}/>
        )}
      </List>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
