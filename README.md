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

## Uploading new PV

Run this command in the root folder.

```txt
node utils/listpdf.mjs src/assets/pv/ > ./src/assets/pv/pv.json
```

## Deploying

To deploy the website you need the 'write' rights on this repository.

```txt
> npm run deploy
```

## Troubleshooting

### 404 on special pages (post, statut, ROI, ...)

Maybe you forgot to compile the _markdown_ text to _html_ format ?

Run `$npm run build` or `$npm run build:[folders]`.

The different available folders are:

- admin
- content
- folklore

### Error running react-snap

When deploying to _github page_ the following issue can happen with `react-snap` and the Chrome Headless Browser: `Puppeteer`.

```txt
> react-snap

Error: Failed to launch chrome!
[0322/190402.289509:FATAL:zygote_host_impl_linux.cc(116)] No usable sandbox!  Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
```

You might check the [troubleshooting guide](https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-windows) of `Puppeteer`.

What worked for me is the following commands.

```txt
# cd to the downloaded instance
cd <project-dir-path>/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/
sudo chown root:root chrome_sandbox
sudo chmod 4755 chrome_sandbox
# copy sandbox executable to a shared location
sudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox
# export CHROME_DEVEL_SANDBOX env variable
export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
```

## Any Question Problem or Ideas

Contact: `webmaster@cercle-informatique.be`
