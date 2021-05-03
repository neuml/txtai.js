# txtai: AI-powered search engine for JavaScript

[![Version](https://img.shields.io/github/release/neuml/txtai.js.svg?style=flat&color=success)](https://github.com/neuml/txtai.js/releases)
[![GitHub Release Date](https://img.shields.io/github/release-date/neuml/txtai.js.svg?style=flat&color=blue)](https://github.com/neuml/txtai.js/releases)
[![GitHub issues](https://img.shields.io/github/issues/neuml/txtai.js.svg?style=flat&color=success)](https://github.com/neuml/txtai.js/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/neuml/txtai.js.svg?style=flat&color=blue)](https://github.com/neuml/txtai.js)

[txtai](https://github.com/neuml/txtai) executes machine-learning workflows to transform data and build AI-powered text indices to perform similarity search.

This repository contains JavaScript bindings for the txtai API. Full txtai functionality is supported.

## Installation
txtai.js can be installed via npm

    npm install txtai

## Examples
The examples directory has a series of examples that give an overview of txtai. See the list of examples below.

| Example     |      Description      |
|:----------|:-------------|
| [Introducing txtai](https://github.com/neuml/txtai.js/blob/master/examples/node/src/embeddings.js) | Overview of the functionality provided by txtai |
| [Extractive QA with txtai](https://github.com/neuml/txtai.js/blob/master/examples/node/src/extractor.js) | Extractive question-answering with txtai |
| [Labeling with zero-shot classification](https://github.com/neuml/txtai.js/blob/master/examples/node/src/labels.js) | Labeling with zero-shot classification |
| [Pipelines and workflows](https://github.com/neuml/txtai.js/blob/master/examples/node/src/pipelines.js) | Pipelines and workflows |

txtai.js connects to a txtai api instance. See [this link](https://github.com/neuml/txtai#api) for details on how to start a new api instance.

Once an api instance is running, do the following to run the examples.

```
git clone https://github.com/neuml/txtai.js
cd txtai.js/examples/node
npm install
npm run build
node dist/embeddings.js
node dist/extractor.js
node dist/labels.js
node dist/pipelines.js
```
