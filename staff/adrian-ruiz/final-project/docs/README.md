# easyFinances APP // AccountIt APP // BAM Online (Business Account Management)

![](https://i.giphy.com/media/SEWEmCymjv8XDbsb8I/giphy.webp)

This app will make your finances much easier. Forget about headaches when creating invoices, managing inventory...

Use an All-in-One app to create Estimates, Invoices, Manage Stock, (future versions will also allow you to integrar all the accounting of your company)

And all of that available anywhere, anytime thanks to its compatibility with all web devices. Forgot installing heavy programs on your computer.

## Functional Description

- Use Cases
- Flows
- UI design (wireframes)

## Technical Description

- Blocks
- Sequence
- Components
- Code Coverage (Testing)
- Technologies

### Data Model


User
- id: ObjectId
- name: String - req
- lastName: String - req
- email: String - req
- password: String - req
- company: ObjectId [Company] - req
- role: String - req (enum ['admin', 'accountant', 'employee'])

Company
- id: ObjectId
- name: String
- legalName: String
- legalId: String
- admin: ObjectId [User],
- users: [User]
- telephone: Number
- companyEmail: String
- customerFacingEmail: String
- postalAddress:
    - street: String
    - town: String
    - state: String
    - zipCode: Number
    - country: String
- physicalAddress:
    - street: String 
    - town: String
    - state: String
    - zipCode: Number
    - country: String
- sector: String
- website: String

Blacklist
- id: ObjectId
- token: String - req
- blackListedAt: Date
- expiresAt: Date

InventoryItem
- id: ObjectId
- company: ObjectId [Company] - req
- name: String - req
- sku: String
- category: String - req
- cost: Number
- averageCost: Number
- description: String
- minStock: Number
- stock: Number

Customer
- id: ObjectId
- company: ObjectId [Company] - req
- name: String - req
- contactName:
    - firstName: String
    - lastName: String
- email: String
- phone: Number
- website: String
- legalId: String
- billingAddress:
    - street: String 
    - town: String
    - state: String
    - zipCode: Number
    - country: String
- payTerms: String

Estimate:
- id: ObjectId
- comapny: ObjectId [Company] - req
- estimateNumber: String - req 
- customer:
    - refId: ObjectId [Customer] - req
    - name: String - req
    - billingAddress: String - req
    - shippingAddress: String - req
    - email: String - req
- terms: String - req
- estimateDate: Date - req
- products: TODO
- totalAmount: Number - req
- status: String - req (enum ['accepted', 'rejected', 'pending'])

Invoice
- id: ObjectId
- company: ObjectId [Company] - req
- invoiceNumber: String - req
- customer:
    - refId: ObjectId [Customer] - req
    - name: String - req
    - billingAddress: String - req
    - shippingAddress: String - req
    - email: String - req
- terms: String - req
- invoiceDate: Date - req
- dueDate: Date - req
- products : TODO
- balance: Number - req
- totalAmount: Number - req
- status: String - req (enum ['overdue', 'pending', 'paid'])


## Roadmap

Sprint 0

- DONE figma
- DONE data model
- INPROGRESS figma to react
- DONE data model to mongoose
- DONE populate data into db(populate.js)
- DONE implement users logic
- DONE implement users api routes
- DONE implement env file
- TODO API specs
- TODO use cases diagram
- TODO INPUT validations API
- TODO INPUT validations APP

Sprint 1

- TODO update Invoices/Inventory/Estimates/Customers from APP
- TODO delete Invoices/Inventory/Estimates/Customers from APP
- TODO search Invoices/Inventory/Estimates/Customers from APP
- TODO settings panel
- TODO make PLUS button on header interactive to create Invoices/Inventory/Estimates/Customers
- TODO define "item" schema and embeed on invoices // Fix app logic

Sprint 2

- TODO logo design and use in Header & favicon
- TODO search bar in header to find everything on APP
- TODO login image slider with features
- TODO design animations : Hover, submits, open menus, spinners...

Sprint 3

- TODO ...