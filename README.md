# Sign

This application is a frontend for a simple sign horoscope generator. For
information on the backend, see
[sign API](https://github.com/ugsto/horoscope-sign-backend). The frontend is
written in React and uses the
[sign API](https://github.com/ugsto/horoscope-sign-backend) to generate
horoscopes.

## Configuration

The application is configured using environment variables. The following
variables are available:

| Variable | Description             | Default |
| -------- | ----------------------- | ------- |
| API_URL  | The URL of the sign API |         |

They can be set in a `.env` file in the root of the project. There is a
`.env.example` file that can be used as a template.

## Scripts

The following scripts are available:

| Script          | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| start:dev       | Starts the application in development mode                                                 |
| start:prod      | Starts the application in production mode                                                  |
| build:dev       | Builds the application in development mode                                                 |
| build:prod      | Builds the application in production mode                                                  |
| test            | Runs the test suite                                                                        |
| lint            | Runs ESLint on the source code                                                             |
| format:prettier | Runs Prettier on the source code and fixes any issues that can be automatically            |
| format:eslint   | Runs ESLint on the source code and fixes any issues that can be automatically              |
| format          | Runs ESLint and Prettier on the source code and fixes any issues that can be automatically |

## Development

The application is written in TypeScript using React. In order to run the
application in development mode, you will need to have Node.js installed. After
cloning the repository, you can install the dependencies by running:

```bash
npm install
```

Once the dependencies are installed, you can start the application by running:

```bash
npm run start:dev
```

This will start the application in development mode. The application will be
available at http://localhost:3000.

## Production

The application can be built and run in production mode using Docker. To build
the application, run:

```bash
docker build -t sign .
```

This will create a Docker image called `sign`. To run the application, run:

```bash
docker run -p 8080:8080 -p 8443:8443 sign
```

This will start the application on port 3000. The application will be available
at http://localhost:3000.

## How to use

The application is a simple frontend for the sign API. It allows you to
generate horoscopes for a given sign and date. The application is available at
https://localhost:8443 after running the application in production mode.

In order to generate a horoscope, you will need to select a sign and press the
"Consultar horóscopo" button. The application will then make a request to the
sign API and display the horoscope.
