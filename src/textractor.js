import API from "./api";

/**
 * txtai textractor instance. 
 */
class Textractor extends API {
    /**
     * Extracts text from a file at path.
     * 
     * @param file file to extract text
     * @return extracted text
     */
    async textract(file) {
        return await this.get("textract", {file: file}).catch (e => {
            throw(e);
        });
    }

    /**
     * Extracts text from a file at path.
     * 
     * @param files list of files to extract text
     * @return list of extracted text
     */
    async batchtextract(files) {
        return await this.post("batchtextract", files).catch (e => {
            throw(e);
        });
    }
}

export default Textractor;
