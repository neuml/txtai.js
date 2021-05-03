import API from "./api";

/**
 * txtai transcription instance. 
 */
class Transcription extends API {
    /**
     * Transcribes audio files to text.
     * 
     * @param file file to transcribe
     * @return transcribed text
     */
    async transcribe(file) {
        return await this.get("transcribe", {file: file}).catch (e => {
            throw(e);
        });
    }

    /**
     * Transcribes audio files to text.
     * 
     * @param files list of files to transcribe
     * @return list of transcribed text
     */
    async batchtranscribe(files) {
        return await this.post("batchtranscribe", files).catch (e => {
            throw(e);
        });
    }
}

export default Transcription;
