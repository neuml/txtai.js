import API from "./api";

/**
 * txtai labels instance. 
 */
class Labels extends API {
    /**
     * Applies a zero shot classifier to text using a list of labels. Returns a list of
     * {id: value, score: value} sorted by highest score, where id is the index in labels.
     * 
     * @param text input text
     * @param labels list of labels
     * @return list of {id: value, score: value} per text element
     */
    async label(text, labels) {
        return await this.post("label", {text: text, labels: labels}).catch (e => {
            throw(e);
        });
    }

    /**
     * Applies a zero shot classifier to list of text using a list of labels. Returns a list of
     * {id: value, score: value} sorted by highest score, where id is the index in labels per
     * text element.
     *
     * @param texts list of texts
     * @param labels list of labels
     * @return list of {id: value score: value} per text element
     */
    async batchlabel(texts, labels) {
        return await this.post("batchlabel", {texts: texts, labels: labels}).catch (e => {
            throw(e);
        });
    }
}

export default Labels;
