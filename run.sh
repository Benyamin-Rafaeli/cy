#!/usr/bin/sh 
npm run srv &
sleep 10s
npx cypress run --spec cypress/integration/examples/api/api_example.spec.js --env name=dev
npx cypress run 
npx mochawesome-merge cypress/reports/mocha/*.json > cypress/mochareports/report.json
npx marge cypress/mochareports/*.json -f report -o cypress/mochareports