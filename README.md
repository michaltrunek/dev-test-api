# Scope
The scope of this repository is to test devowelizer API endpoint

#Requirements

```java 1.8```
```Node >8```
```Docker```

#Install

1. clone the repository
2. run ``npm install`` command from the console

#Runners

```npm run debug```
to run all the API tests in verbose mode with extra logging into console (service has to run in a docker before)

```npm run test```
to run all the API tests with mochawesome reporter (service has to run in a docker before)

```npm run stop-containers```
to stop a docker container and delete it

```npm run docker-service```
to run the service in a docker container in a silent mode

```npm run docker-test```
to run the test with launching the service in docker (service has to run before the execution of this command)

#Tests

All tests are stored in `./tests/` folder

#Output

If the tests are launched with ```npm run test``` script, all results are stored in `./output` folder in `.html` file.