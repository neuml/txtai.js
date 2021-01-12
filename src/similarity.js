import API from "./api";

/**
 * txtai similarity instance.
 */
class Similarity extends API {
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
}

export default Similarity;
