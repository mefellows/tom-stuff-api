# Tom's stuff - API

`npm run server` should start your api on http://localhost:3000

## Database schema

Modify `db/schema.sql` to manage the SQL database. Scripts will be run in alphabetical order as per ["How to extend this image"](https://hub.docker.com/_/postgres/).

## Running Postgres

### Run the postgres docker container
The below command creates a new postgres database with following details:

* User: postgres
* Password: postgres
* Open on port 5432 on your localhost
* Name of container: postgres

```shell
npm run docker
```

## Cleaning and getting a new docker container

```shell
npm run clean
```

### Shell into a Postgres session
This says "jump into the docker container called 'postgres' with the linux user 'postgres', 
then run the command 'psql' with argument 'postgres'.

You are now connected in the database schema with name 'postgres'.

```shell
npm run psql
```