# MENUGER

![](link)


## Functional Description

### Use Cases

User
- create menus by dates
- generate a list from menus
- add menus to fav list

![](images/use-cases.jpg)

## Technical Description

### Blocks

### Data Model

User
- id: ObjectId
- name
- email
- password
- favs: [id]

Recipe
- id: ObjectId
- title
- photo
- ingredients [ingredients]


Ingredient
- id: ObjectId
- quantity
- class


![](images/data-model.jpg)