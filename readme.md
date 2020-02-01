This is a bootstrap project where I implemented the full e2e test cycle that included:
CI in Travis and displayed in public view on dashboard 
Parallel execution and displayed in public view on Cypress dashboard
Visual UI testing with Percy.io and displayed in public view on Percy dashboard

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

for persy need to export PERCY_TOKEN=24a53b2592a5de794b3ef8fb9e76fb33bfda5b57baff7a3ba6495d622407b4b4
```

Run headed
----------
```sh
npm run cyh
```

Run Specific spec and Environment
----------
```sh
npm run cyh --spec cypress/integration/examples/opensourcecms.spec.js

npx cypress run --spec /Users/benjamin/projects/private/cy/cypress/integration/examples/opensourcecms.spec.js --env name qa --browser chrome
npx cypress run --spec /Users/benjamin/projects/private/cy/cypress/integration/examples/opensourcecms.spec.js --env name dev --browser chrome
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

Cypress Dashboard and Parallel
----------
```sh
npx cypress run --record --key 02ac3e53-8afa-4d78-95a1-fd6e010aa9c4 --parallel
```

Update Cypress 
----------
```sh
npm update cypress
```

Dashboard Cypress
----------
```sh
https://dashboard.cypress.io/projects/4g6xfs/runs
```

Dashboard Percy
----------
```sh
https://percy.io/CY-POC/bootstrap-cy
```

https://travis-ci.com/Benyamin-Rafaeli/cy/builds/