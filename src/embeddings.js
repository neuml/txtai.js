import API from "./api";

/**
 * txtai embeddings instance. 
 */
class Embeddings extends API {
    /**
     * Finds documents in the embeddings model most similar to the input query. Returns
     * a list of (id, score) sorted by highest score, where id is the document id in
     * the embeddings model.
     * 
     * @param query query text
     * @param limit maximum results (defaults to 10)
     * @return list of (id, score)
     */
    async search(query, limit = 10) {
        return await this.get("search", {query: query, limit: limit}).catch(e => {
            throw(e);
        });
    }

    /**
     * Finds documents in the embeddings model most similar to the input queries. Returns
     * a list of (id, score) sorted by highest score per query, where id is the document id
     * in the embeddings model.
     *
     * @param queries queries text
     * @param limit maximum results (defaults to 10)
     * @return list of (id, score) per query
     */
    async batchsearch(queries, limit = 10) {
        return await this.post("batchsearch", {queries: queries, limit: limit}).catch (e => {
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
     * Builds an embeddings index for previously batched documents. No further documents can be added
     * after this call.
     */
    async index() {
        await this.get("index", null).catch(e => {
            throw(e);
        });
    }

    /**
     * Computes the similarity between query and list of text. Returns a list of
     * (id, score) sorted by highest score, where id is the index in texts.
     *
     * @param query query text
     * @param texts list of text
     * @return list of (id, score)
     */
    async similarity(query, texts) {
        return await this.post("similarity", {query: query, texts: texts}).catch (e => {
            throw(e);
        });
    }

    /**
     * Computes the similarity between list of queries and list of text. Returns a list
     * of (id, score) sorted by highest score per query, where id is the index in texts.
     * 
     * @param queries queries text
     * @param texts list of text
     * @return list of (id, score) per query
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
    async embeddings(text) {
        return await this.get("embeddings", {text: text}).catch(e => {
            throw(e);
        });
    }

    /**
     * Transforms list of text into an embeddings arrays.
     *
     * @param texts list of text
     * @return embeddings array
     */
    async batchembeddings(texts) {
        return await this.post("batchembeddings", texts).catch(e => {
            throw(e);
        });
    }
}

export default Embeddings;
