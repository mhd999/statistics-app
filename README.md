### Statistic data client

This is a React.js to fetch statistics data and show it in sortable table.

### Install dependencies
```sh
npm install
```

### Run tests
```sh
npm run test
```
This script will run the unit tests, linting tests, and type checking tests.
It's useful when used for automated build with a `CI` tool ie.`Jenkins`, the script makes sure the app running well before make a build and deploy it.

Unit test: `JEST`
Linting: `Eslint`
Type checking: `Flow`

### Run tests in watch mode
```sh
npm run test:watch
```

### Run type checking tests
```sh
npm run test:typecheck
```

### Run Application
```sh
npm run start
```

### Build Application
```sh
npm run build
```

### Data Types

In order to not use `any` when annotate custom data type, there two data types declared to `flow` to recognise.

#### Statistic type
```
id: string
csvURI: string
datasettURI: string
jsonURI: string
statistic: string
tags: []
title: string
```

#### Column type
```
header: string
accessor: string
```

### Notes

The app using [creat-react-app](https://github.com/facebookincubator/create-react-app) as scafolding tool which express `Facebook` opinion on how `React.js` applicatiom should be built.
Also, this save us time updating the packages when starting new app. 

However if you would like to check the role for each dependency check this [repo](https://github.com/mhd999/react-redux) also, it express my OWN opinion on how `React.js` apps should be built. 