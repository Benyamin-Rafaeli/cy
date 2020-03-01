# Cypress IO Bootstrap

[![Build Status](https://travis-ci.com/Benyamin-Rafaeli/cy.svg?branch=master)](https://travis-ci.com/Benyamin-Rafaeli/cy/builds/)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/CY-POC/bootstrap-cy) 
[![Cypress.io tests](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/projects/4g6xfs/runs)
[![Action status](https://img.shields.io/docker/pulls/cypress/base.svg)](https://hub.docker.com/r/cypress/base)
[![Action status](https://github.com/cypress-io/github-action/workflows/main/badge.svg?branch=master)](https://github.com/cypress-io/github-action/actions)
[![renovate-app badge](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovate.whitesourcesoftware.com/)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=io.sonarcloud.examples.typescript-sqscanner-travis-project&metric=alert_status)](https://sonarcloud.io/organizations/benyamin-rafaeli/projects)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a bootstrap project where I implemented the full e2e test cycle that included:
- CI in Travis and displayed in public view on dashboard
- Parallel execution and displayed in public view on Cypress dashboard
- Visual UI testing with Percy.io and displayed in public view on Percy dashboard

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
npm run cyh
```

Run headless (Starting json server - npm run srv)
----------
```sh
npm run cy
```

Runner Cypress
----------
```sh
npm run cyx
```

Run Specific spec and Environment
----------
```sh
npm run cyh --spec cypress/integration/examples/opensourcecms.spec.js --env name=qa 

npx cypress run --spec cypress/integration/examples/api_example.spec.js --env name=dev
```

Run in Docker 
----------
```sh
docker-compose -f docker-compose.yml up  (--build)
```

Cypress Dashboard and Parallel
----------
```sh
npx cypress run --record --key 02ac3e53-8afa-4d78-95a1-fd6e010aa9c4 --parallel
```

## TODO

- Slack Integration
- Cross-browser (latest version)
