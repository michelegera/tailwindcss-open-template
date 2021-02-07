# “Open” landing page with [Tailwind CSS](https://tailwindcss.com/docs)

An implementation of the [“Open” landing page template](https://open.cruip.com/)
by [Cruip](https://cruip.com/)
using [Tailwind CSS Boilerplate](https://github.com/michelegera/create-tailwindcss-boilerplate).

👉 [Check out the demo](https://open.michelegera.dev/)

## Getting started

Clone this repository, then run:

```bash
$ yarn dev
```

## Notes

### [Animate.css][1]

* This demo uses additional CSS classes for animations, like `fadeIn`, which are from [`tailwindcss-animatecss`](https://github.com/bentzibentz/tailwindcss-animate.css), a [Tailwind CSS plugin](https://tailwindcss.com/docs/plugins) that integrates [`Animate.css`][1].

[1]: https://github.com/animate-css/animate.css

### Deploy to Github Pages

It’s possible to deploy the build to Github pages using a [worktree](https://git-scm.com/docs/git-worktree).
For more details, check out [this blog post](http://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html).

```bash
$ yarn build
$ cd dist/
$ git add --all
$ git commit -m "Build <current-version-number>"
$ git push origin gh-pages
```
