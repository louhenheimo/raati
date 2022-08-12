# Raati

Raati is a "Virtual Council" software that is forked from the [Digiraati](https://github.com/ALL-YOUTH/digiraati). Like Digiraati, Raati is a open sourced (MIT license) codebase. Original Digiraati was developed at [Tampere University](https://www.tuni.fi/en) as a part of [ALL-YOUTH -project](https://www.allyouthstn.fi/en/all-youth-2/), but it's currently not being developed anymore. This fork was created to continue some further development and polishing as a personal project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What is needed to install the software

```
Software: 
-compatible Linux/*IX Operating System (tested under Ubuntu 20.04)
-nodejs

Hardware (recommended):
-3GB RAM
-2GB Diskspace (SSD for optimal performance)
```

### Installing

A step by step series of examples that tell you how to get a development env running.

After cloning repository, do (under raati/raati/ -directory):

```
npm install
```

After that, install your mandatory SSL certificate

```
You *need* the following cert files: privkey.pem, cert.pem, chain.pem.
If your ISP/web hosting company doesn't provide these, check out the free certbot -service
```
Make the logs directory

```
mkdir logs
```
You can now start the Raati at dev mode

```
npm run dev
```
Raati is now running at https://localhost:1443

Congratulations! :)

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [npm](https://www.npmjs.com) - Package management
* [Express](https://expressjs.com) - Web application framework

## Authors

### Current developers 
* **Petri Louhenheimo** - *Maintaining Repository* - [louhenheimo](https://github.com/louhenheimo)

### Past developers under the ALL-YOUTH's Digiraati -project
* **Miikka Lehtonen** - *Development* - [soralapio](https://github.com/soralapio)
* **Aleksi Hiltunen** - *Initial Work & Development* - [tekopakka](https://github.com/tekopakka)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Jari Varsaluoma (Tampere University)
* ALL-YOUTH subproject 3: Digital Solutions for Digital Generation (Tampere University)
* Strategic Research Council (Academy of Finland)
