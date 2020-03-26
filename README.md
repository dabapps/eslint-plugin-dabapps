# NPM Template

**A template for creating npm modules**

[![Build Status](https://travis-ci.com/dabapps/npm-template.svg?token=YbH3f6uroz5f5q8RxDdW&branch=master)](https://travis-ci.com/dabapps/npm-template)

This repository exists to allow use to easily create TypeScript npm modules.

Simply following the instructions below to create a duplicate of the repository, update the names and links, install your dependencies and write a thing.

## Duplicating the repository

Create a bare clone of the repository.

```shell
git clone --bare https://github.com/dabapps/npm-template.git
```

Mirror-push to the new repository.

```shell
cd old-repository.git
git push --mirror https://github.com/dabapps/new-repository.git
```

Remove the temporary local repository you created in step 1.

```shell
cd ..
rm -rf npm-template.git
```

Yey, boring stuff done.

## Update names and urls

Okay, I lied...

There are a bunch of places on the `package.json`, `README.md`, etc that should be updated with your project's name, description, GitHub urls, Travis status badge etc.

Your project MUST be named with the format `@dabapps/project-name` so that it will be published within the dabapps scope.

This will allow it to be installed and imported with `@dabapps/project-name`.

Gotta catch 'em all!

## A note about exporting things

Your module should (unless you have reason otherwise) export all of your stuff at the root level.

This means that things should be exported from the `src/ts/index.ts`.

You'll notice that, in this repository, the `index.ts` exports the default from a sub-module as a named export.

I would recommend this as a standard.

## Configure NPM so you can install this locally

You will need an `NPM_TOKEN` in your environment to install this module.

The token is available in 1password.

You will need to add this to your `.bashrc`, or `.bash_profile`, or whatever.

You may need to source this before installing the module e.g.

```shell
source ~/.bash_profile
```

## Configuring NPM on another project so your module can be installed

You'll notice a `.npmrc` in the root of this repository. NOT THE NVMRC.

In order to install your module in another project, this file should be added to the root of that project.

## Configure Travis so it can run your tests and or install this module

Travis also needs an `NPM_TOKEN` in order to run your tests, and to install this module in other projects.

Open up the project's setting e.g. https://travis-ci.com/dabapps/phils-awesome-project/settings

Add the `NPM_TOKEN` from 1password as an environment variable.

## RELEASE ALL THE THINGS!

In order to release a new version of your module you need to create a GitHub release.

BEERS! Okay, now I've got your attention, there's a very important thing to do first (before beers).

You need to update the version of your module in your `package.json`.

Please follow the semver specification for versioning your module.

https://semver.org/

Modules should not be `1.0.0` or greater until they are complete.

Modules in development, or that are very new, should use the minor version number for major changes until a major version is released.

Once you've updated your `package.json` you can head over to the releases page for your project e.g. https://github.com/dabapps/phils-terrible-project/releases

Here you can create a new release and Travis will automatically publish this to NPM.

YOU MUST use the same version as in your `package.json` for the GitHub release, but prefixed with `v`.

E.g. when you change your `package.json` version to `0.1.0` your GitHub release will be version `v0.1.0`.

## Have a beer

Well done. You've released your first DabApps node module! Grab yourself a beer.

No, I don't care that it's only 8:30am.
