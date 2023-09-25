import API from "./api";

/**
 * txtai embeddings instance. 
 */
class Embeddings extends API {
    /**
     * Finds documents in the embeddings model most similar to the input query. Returns
     * a list of {id: value, score: value} sorted by highest score, where id is the
     * document id in the embeddings model.
     * 
     * @param query query text
     * @param limit maximum results (defaults to 10)
     * @param weights hybrid score weights, if applicable
     * @param index index name, if applicable
     * @return list of {id: value, score: value}
     */
    async search(query, limit = 10, weights = null, index = null) {
        let params = {
            query: query,
            limit: limit
        }

        if (weights != null) {
            params["weights"] = weights
        }
        if (index != null) {
            params["index"] = index
        }

        return await this.get("search", params).catch(e => {
            throw(e);
        });
    }

    /**
     * Finds documents in the embeddings model most similar to the input queries. Returns
     * a list of {id: value, score: value} sorted by highest score per query, where id is
     * the document id in the embeddings model.
     *
     * @param queries queries text
     * @param limit maximum results (defaults to 10)
     * @param weights hybrid score weights, if applicable
     * @param index index name, if applicable
     * @return list of {id: value, score: value} per query
     */
    async batchsearch(queries, limit = 10, weights = null, index = null) {
        let params = {
            queries: queries,
            limit: limit
        }

        if (weights != null) {
            params["weights"] = weights
        }
        if (index != null) {
            params["index"] = index
        }

        return await this.post("batchsearch", params).catch (e => {
            throw(e);
        });
    }

    /**
     * Adds a batch of documents for indexing.
     * 
     * @param documents list of {id: value, text: value}
     */
    async add(documents) {
        await this.post("add", documents).catch(e => {
            throw(e);
        });
    }

    /**
     * Builds an embeddings index for previously batched documents.
     */
    async index() {
        await this.get("index", null).catch(e => {
            throw(e);
        });
    }

    /**
     * Runs an embeddings upsert operation for previously batched documents.
     */
    async upsert() {
        await this.get("upsert", null).catch(e => {
            throw(e);
        });
    }

    /**
     * Deletes from an embeddings index. Returns list of ids deleted.
     *
     * @param ids list of ids to delete
     * @return ids deleted
     */
    async delete(ids) {
        return await this.post("delete", ids).catch(e => {
            throw(e);
        });
    }

    /**
     * Recreates this embeddings index using config. This method only works if document content storage is enabled.
     *
     * @param config new config
     * @param func optional function to prepare content for indexing
     */
    async reindex(config, func = null) {
        let params = {
            config: config,
        }

        if (func != null) {
            params["function"] = func
        }

        await this.post("reindex", params).catch(e => {
            throw(e);
        });
    }

    /**
     * Total number of elements in this embeddings index.
     *
     * @return number of elements in embeddings index
     */
    async count() {
        return await this.get("count", null).catch(e => {
            throw(e);
        });
    }

    /**
     * Computes the similarity between query and list of text. Returns a list of
     * {id: value, score: value} sorted by highest score, where id is the index
     * in texts.
     *
     * @param query query text
     * @param texts list of text
     * @return list of {id: value, score: value}
     */
    async similarity(query, texts) {
        return await this.post("similarity", {query: query, texts: texts}).catch (e => {
            throw(e);
        });
    }

    /**
     * Computes the similarity between list of queries and list of text. Returns a list
     * of {id: value, score: value} sorted by highest score per query, where id is the
     * index in texts.
     * 
     * @param queries queries text
     * @param texts list of text
     * @return list of {id: value, score: value} per query
     */
    async batchsimilarity(queries, texts) {
        return await this.post("batchsimilarity", {queries: queries, texts: texts}).catch (e => {
            throw(e);
        });
    }

    /**
     * Transforms text into an embeddings array.
     *
     * @param text input text
     * @return embeddings array
     */
    async transform(text) {
        return await this.get("transform", {text: text}).catch(e => {
            throw(e);
        });
    }

    /**
     * Transforms list of text into embeddings arrays.
     *
     * @param texts list of text
     * @return embeddings array
     */
    async batchtransform(texts) {
        return await this.post("batchtransform", texts).catch(e => {
            throw(e);
        });
    }
}

export default Embeddings;
