import {Embeddings} from "txtai";
import {sprintf} from "sprintf-js";

/**
 * Example embeddings functionality.
 * 
 * Implements functionality found in this notebook: https://github.com/neuml/txtai/blob/master/examples/01_Introducing_txtai.ipynb
 */
const run = async () => {
    try {
        let embeddings = new Embeddings("http://localhost:8000");

        let data  = ["US tops 5 million confirmed virus cases",
                     "Canada's last fully intact ice shelf has suddenly collapsed, forming a Manhattan-sized iceberg",
                     "Beijing mobilises invasion craft along coast as Taiwan tensions escalate",
                     "The National Park Service warns against sacrificing slower friends in a bear attack",
                     "Maine man wins $1M from $25 lottery ticket",
                     "Make huge profits without work, earn up to $100,000 a day"];

        console.log("Running similarity queries");
        console.log(sprintf("%-20s %s", "Query", "Best Match"));
        console.log("-".repeat(50));

        for (let query of ["feel good story", "climate change", "public health story", "war", "wildlife", "asia", "lucky", "dishonest junk"]) {
            let results = await embeddings.similarity(query, data);
            let uid = results[0].id;
            console.log(sprintf("%-20s %s", query, data[uid]))
        }

        let documents = data.map((text, index) => ({id: index, text: text}));

        await embeddings.add(documents);
        await embeddings.index();

        console.log();
        console.log("Building an Embeddings index");
        console.log(sprintf("%-20s %s", "Query", "Best Match"));
        console.log("-".repeat(50));

        for (let query of ["feel good story", "climate change", "public health story", "war", "wildlife", "asia", "lucky", "dishonest junk"]) {
            let results = await embeddings.search(query, 1);
            let uid = results[0].id;
            console.log(sprintf("%-20s %s", query, data[uid]));
        }

        data[0] = "See it: baby panda born"

        await embeddings.delete([5]);
        await embeddings.add([{id: 0, text: data[0]}])
        await embeddings.upsert();

        console.log();
        console.log("Test delete/upsert/count");
        console.log(sprintf("%-20s %s", "Query", "Best Match"));
        console.log("-".repeat(50));

        let query = "feel good story";
        let results = await embeddings.search(query, 1);
        let uid = results[0].id;
        console.log(sprintf("%-20s %s", query, data[uid]));

        let count = await embeddings.count();
        console.log();
        console.log(sprintf("Total Count: %d", count));
    }
    catch (e) {
        console.trace(e);
    }
};

run();