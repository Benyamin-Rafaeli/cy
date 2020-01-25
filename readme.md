Setup
------------
```sh
$ git clone https://github.com/Benyamin-Rafaeli/cy
$ cd cy
```

Installation
------------
```sh
npm i
```

Run headed
----------
```sh
npm run cy:headed
```

Run Specific spec
----------
```sh
npm run cy:headed --spec cypress/integration/examples/opensourcecms.spec.js
```

Run headless
----------
```sh
npm run cy
```

Runner Cypress
----------
```sh
npm run cyx
```

Run in Docker 
----------
```sh
docker-compose -f docker-compose.yml up
```

Rebuild Docker 
----------
```sh
docker-compose -f docker-compose.yml up --build
```
