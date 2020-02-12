#!/usr/bin/sh 
npx cypress run
npx mochawesome-merge cypress/reports/mocha/*.json > cypress/mochareports/report.json
npx marge cypress/mochareports/*.json -f report -o cypress/mochareports