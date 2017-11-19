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
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=password --name postgres postgres
```

### Shell into a Postgres session
This says "jump into the docker container called 'postgres' with the linux user 'postgres', 
then run the command 'psql' with argument 'postgres'.

You are now connected in the database schema with name 'postgres'.

```shell
docker exec -it --user postgres postgres psql postgres
```