#!/usr/bin/sh 
npm run srv &
sleep 5s
npx cypress run
npx mochawesome-merge cypress/reports/mocha/*.json > cypress/mochareports/report.json
npx marge cypress/mochareports/*.json -f report -o cypress/mochareports