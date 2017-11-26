# Tom's stuff - API

Run's the 

`npm run server` should start your api on http://localhost:3000
## Running Postgres

### Run the postgres docker container
The following command creates a new postgres database
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