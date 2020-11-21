import API from "./api";

/**
 * txtai labels instance. 
 */
class Labels extends API {
    /**
     * Applies a zero shot classifier to a text section using a list of labels.
     * 
     * @param text input text
     * @param labels list of labels
     * @return list of (label, score) for text
     */
    async label(text, labels) {
        return await this.post("label", {text: text, labels: labels}).catch (e => {
            throw(e);
        });
    }
}

export default Labels;
