import React from 'react';

const ListItem = ({item}) => {
  return (    
    <li>{item}</li>
  )
}

const RenderList = ({list}) => {
  return (
    <ul>
      {list.map((item, i) => <ListItem item={item} key={i}/>)}
    </ul>
  )
}

export default RenderList;