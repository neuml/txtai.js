import API from "./api";

/**
 * txtai summary instance. 
 */
class Summary extends API {
    /**
     * Runs a summarization model against a block of text.
     *
     * @param text text to summarize
     * @param minlength minimum length for summary
     * @param maxlength maximum length for summary
     * @return summary text
     */
    async summary(text, minlength, maxlength) {
        let params = {text: text}
        if (minlength) {
            params.minlength = minlength;
        }
        if (maxlength) {
            params.maxlength = maxlength;
        }

        return await this.get("summary", params).catch (e => {
            throw(e);
        });
    }

    /**
     * Runs a summarization model against a block of text.
     *
     * @param texts list of text to summarize
     * @param minlength minimum length for summary
     * @param maxlength maximum length for summary
     * @return list of summary text
     */
    async batchsummary(texts, minlength, maxlength) {
        let params = {texts: texts}
        if (minlength) {
            params.minlength = minlength;
        }
        if (maxlength) {
            params.maxlength = maxlength;
        }

        return await this.post("batchsummary", params).catch (e => {
            throw(e);
        });
    }
}

export default Summary;
