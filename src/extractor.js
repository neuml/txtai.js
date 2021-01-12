import API from "./api";

/**
 * txtai extractor instance. 
 */
class Extractor extends API {
    /**
     * Extracts answers to input questions.
     * 
     * @param queue list of {name: value, query: value, question: value, snippet: value}
     * @param texts list of text
     * @return list of {name: value, answer: value}
     */
    async extract(queue, texts) {
        return await this.post("extract", {queue: queue, texts: texts}).catch (e => {
            throw(e);
        });
    }
}

export default Extractor;
