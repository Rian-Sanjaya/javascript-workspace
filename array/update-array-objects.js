let items = [
  {id: 1, someattr: 'a string', anotherattr: ''},
  {id: 2, someattr: 'another string', anotherattr: ''},
  {id: 3, someattr: 'a string', anotherattr: ''},
]

const updateItem = (id, itemAttribute) => {
  const index = items.findIndex(item => item.id === id)

  items = [
    ...items.slice(0, index),
    Object.assign({}, items[index], itemAttribute),
    ...items.slice(index+1)
  ]
}

updateItem(2, {someattr: 'a new value'})

console.log(items)