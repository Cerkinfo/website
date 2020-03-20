# Cerkinfo Website

The website is created using [create-react-app](https://github.com/facebook/create-react-app "create react app") and was made to run as a statical website requiring little to no maintenance through the years.

## Requirements

### NPM

- Debian based distro: [follow this link](https://github.com/nodesource/distributions/blob/master/README.md "nodejs on Github")
- Arch based distro: `pacman -S nodejs npm`

### Project

```txt
> git clone "https://github.com/Cerkinfo/website"
> cd website
> npm install # or yarn install if you prefer
```

## Run Dev Instance

```txt
> npm run start
```

To create the index for the statical assets (pdf, markdown files and make them
visible for the website you should also run these commands once.

```txt
> npm run build:folklore
> npm run build:admin
> npm run build:content
```

## Deploying

To deploy the website you need the 'write' rights on this repository.

```txt
> npm run deploy
```

## Troubleshooting

1. 404 on special pages (post, statut, ROI, ...):
run `$npm run build` or `$npm run build:[folders]`.

The different folders are:

- admin
- content
- folklore

## Any Question Problem or Ideas

Contact: `webmaster@cercle-informatique.be`
