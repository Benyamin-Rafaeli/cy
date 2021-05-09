FROM cypress/base:14

WORKDIR /app
COPY package.json .
RUN npm install --savedev cypress
RUN $(npm bin)/cypress verify
COPY cypress cypress
COPY cypress.json .
COPY run.sh .

# RUN $(npm bin)/cypress
ENTRYPOINT [ "sh", "run.sh" ]
