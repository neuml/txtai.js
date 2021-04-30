import API from "./api";

/**
 * txtai segmentation instance. 
 */
class Segmentation extends API {
    /**
     * Segments text into semantic units.
     * 
     * @param text input text
     * @return segmented text
     */
    async segment(text) {
        return await this.get("segment", {text: text}).catch (e => {
            throw(e);
        });
    }

    /**
     * Segments text into semantic units.
     * 
     * @param texts list of texts to segment
     * @return list of segmented text
     */
    async batchsegment(texts) {
        return await this.post("batchsegment", texts).catch (e => {
            throw(e);
        });
    }
}

export default Segmentation;
