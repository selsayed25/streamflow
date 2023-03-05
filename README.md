# Streamflow - A website to collect complex stream data into a more user-friendly format

## Development

**1. Install the dependencies.**
The dependencies are included in the `package.json` file, you just need to install them:

```bash
$ npm install
```

**2. Start the development environment**
To start the development environment in `gatsby` is quite easy, you just need to run this command to start it up:

```bash
$ gatsby develop # for people who installed the gatsby-cli
$ npm run develop # for people who didn't installed the gatsby-cli
```

These commands should have your site running in [http://localhost:8000](http://localhost:8000). Edit the files and it should update in real time.

### Troubleshooting

If the commands above don't run or don't function as they should, then consult to this command below:

```bash
$ gatsby develop -H 0.0.0.0
```

The prerequisite to run this command is to install the `gatsby-cli`:

```bash
$ npm install -g gatsby-cli
```