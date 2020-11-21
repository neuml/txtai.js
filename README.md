# txtai: AI-powered search engine for JavaScript

txtai builds an AI-powered index over sections of text. txtai supports building text indices to perform similarity searches and create extractive question-answering based systems. txtai also has functionality for zero-shot classification.

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

txtai.js connects to a txtai api instance. See this link for details on how to start a new api instance.

Once an api instance is running, do the following to run the examples.

```
git clone https://github.com/neuml/txtai.js
cd txtai.js/examples/node
npm install
npm run build
node dist/embeddings.js
node dist/extractor.js
node dist/labels.js
```
