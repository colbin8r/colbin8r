# colbin8r.me

Personal homepage of Colby Rogness.

## Development

This project is built on [Hexo](https://hexo.io/). Hexo is a flexible static site generator built on Node.

You can immediately start a live development server (which watches for file changes):
```sh
$ npm start
```

You can force a manual build of the static site to the `/public` directory with:
```sh
$ npm run build
```

## Deployment

The continuous deployment process is only 3 primary steps:

1. Push to [`master` on GitHub](https://github.com/colbin8r/colbin8r/tree/master).
2. Travis CI uses Hexo to generate a static site based on the `master` branch and pushes it to [`site` on GitHub](https://github.com/colbin8r/colbin8r/tree/site).
3. [Netlify](https://www.netlify.com/), the host, watches the `site` branch and deploys the static site.

Travis CI is set to cancel currently running builds when a new push is detected, so it's okay to push several times in short succession.

Although deployment is automated, it's possible to generate a manual deployment with `npm run deploy`. This could be useful if, for instance, you wanted to deploy a branch other than `master` or deploy uncommitted code. The continuous deployment system can also be paused via one of two ways:

1. Pause Travis CI watching `master`. You then use `npm deploy` to run a manual deployment to `site`. *Best when deploying code not on `master`.*
2. Pause Netlify watching `site`. You then use Netlify to trigger a manual deployment from `site`. *Best when deploying code on `master`, but maybe not at the time it was pushed to `master`.*
