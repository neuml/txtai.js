import API from "./api";

/**
 * txtai workflows instance. 
 */
class Workflows extends API {
    /**
     * Executes a named workflow using elements as input.
     *
     * @param name workflow name
     * @param elements list of elements to run through workflow
     * @return list of processed elements
     */
    async workflow(name, elements) {
        return await this.post("workflow", {name: name, elements: elements}).catch (e => {
            throw(e);
        });
    }
}

export default Workflows;
