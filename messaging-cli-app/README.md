# Bunny
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/npm-%3E%3D8.11.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D16.15.1-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/ZerLock/playground/messaging-cli-app#readme)

> A messaging CLI application

## How does it work?
*Explanation comming soon with schemas...*

⚠️ Work only on local at the moment

## Getting Started
### Installation
There are two ways to install bunny to use the CLI on your computer.

- First way: Install released package from [npmjs.com](https://npmjs.com)
```bash
# Install the released package from npmjs.com
npm install -g @ZerLock/bunny
```
- Second way: Clone the repository and install locally the CLI
```bash
# Clone repository
git clone git@github.com:ZerLock/bunny.git
cd bunny/

# Build the project
npm run build

# Create symbolic link to use the CLI
npm link
```

### Quickstart
How to display usage of the CLI
```bash
# Display global usage
bunny --help

# Display host usage
bunny host --help

# Display client usage
bunny connect --help
```

### Usage
There are some useful commands
```bash
# Basic host
bunny host --port 8080 --username server

# Basic client on same network
bunny connect --port 8080 --username client

# Basic client
bunnt connect --host 10.10.10.10 --port 8080 --username client
```

## Get involved
You're invited to join this project ! Check out the [contribution guide](./CONTRIBUTING.md).

If you're interrested in how the project is organized at a higher level, please contact one of the currents project managers.

## The team

Developers
| [<img src="https://github.com/ZerLock.png?size=85" width=85><br><sub>Léo Dubosclard</sub>](https://github.com/ZerLock) |
| :---: |

Manager
| [<img src="https://github.com/ZerLock.png?size=85" width=85><br><sub>Léo Dubosclard</sub>](https://github.com/ZerLock) |
| :---: |

## License
Copyright © 2022 [Léo Dubosclard](https://github.com/ZerLock).

This project is [ISC](https://github.com/ZerLock/playground/blob/master/messaging-cli-app/LICENSE) licensed.

___

> Don't hesitate to put a star :star: on the repository
