import React from 'react'

function withList(ItemComponent) {
  return props => {
    console.log('@p', props)
    return 'test'
  }
}

function Link({item}) {
  return <a href={item.href}>{item.text}</a>
}

const LinkList = withList(Link)

export default LinkList
