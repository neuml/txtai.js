import API from "./api";

/**
 * txtai embeddings instance. 
 */
class Embeddings extends API {
    /**
     * Runs an embeddings search.
     * 
     * @param q query string
     * @param n number of results to return (defaults to 10)
     * @return search results
     */
    async search(q, n = 10) {
        return await this.get("search", {q: q, n: n}).catch(e => {
            throw(e);
        });
    }

    /**
     * Adds a batch of documents for indexing.
     * 
     * @param documents list of objects each containing an id and text element
     */
    async add(documents) {
        await this.post("add", documents).catch(e => {
            throw(e);
        });
    }

    /**
     * Builds an embeddings index. No further documents can be added after this call.
     */
    async index() {
        await this.get("index", null).catch(e => {
            throw(e);
        });
    }

    /**
     * Calculates the similarity between search and list of elements in data.
     * 
     * @param search text
     * @param data list of text to compare against
     * @return list of similarity scores
     */
    async similarity(search, data) {
        return await this.post("similarity", {search: search, data: data}).catch (e => {
            throw(e);
        });
    }

    /**
     * Transforms text into an embeddings array.
     * 
     * @param t input text
     * @return embeddings array
     */
    async embeddings(t) {
        return await this.get("embeddings", {t: t}).catch(e => {
            throw(e);
        });
    }
}

export default Embeddings;
