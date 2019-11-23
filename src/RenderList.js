import React from 'react';

const ListItem = ({item}) => {
  return (    
    <li>{item}</li>
    )
  }
  
  const RenderList = ({list}) => {
  return (
    <ol>
      {list.map(({name, url}, i) => <ListItem item={name || list[i]} key={url || i}/>)}    
    </ol>
  )
}

export default RenderList;

/*  
item = {
  name: bulbasaur, 
  url: 'https....'
}



name = item.name

{name}
*/