import API from "./api";

/**
 * txtai extractor instance. 
 */
class Extractor extends API {
    /**
     * Extracts answers to input questions
     * 
     * @param documents list of {id: value, text: value}
     * @param queue list of {name: value, query: value, question: value, snippet: value)
     * @return extracted answers
     */
    async extract(documents, queue) {
        return await this.post("extract", {documents: documents, queue: queue}).catch (e => {
            throw(e);
        });
    }
}

export default Extractor;
