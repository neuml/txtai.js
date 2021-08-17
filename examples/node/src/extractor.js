import {Extractor} from "txtai";

/**
 * Example extractor functionality.
 * 
 * Implements logic found in this notebook: https://github.com/neuml/txtai/blob/master/examples/05_Extractive_QA_with_txtai.ipynb
 */
const run = async () => {
    try {
        let extractor = new Extractor("http://localhost:8000");

        let data = ["Giants hit 3 HRs to down Dodgers",
                    "Giants 5 Dodgers 4 final",
                    "Dodgers drop Game 2 against the Giants, 5-4",
                    "Blue Jays beat Red Sox final score 2-1",
                    "Red Sox lost to the Blue Jays, 2-1",
                    "Blue Jays at Red Sox is over. Score: 2-1",
                    "Phillies win over the Braves, 5-0",
                    "Phillies 5 Braves 0 final",
                    "Final: Braves lose to the Phillies in the series opener, 5-0",
                    "Lightning goaltender pulled, lose to Flyers 4-1",
                    "Flyers 4 Lightning 1 final",
                    "Flyers win 4-1"]

        // Run series of questions
        let questions = ["What team won the game?", "What was score?"];
        for (let query of ["Red Sox - Blue Jays", "Phillies - Braves", "Dodgers - Giants", "Flyers - Lightning"]) {
            console.log("----" + query + "----");

            let queue = questions.map(question => ({name: question, query: query, question: question, snippet: false}));
            console.log(await extractor.extract(queue, data));
        }

        // Ad-hoc questions
        let question = "What hockey team won?";
        
        console.log("----" + question + "----");
        console.log(await extractor.extract([{name: question, query: question, question: question, snippet: false}], data));
    }
    catch (e) {
        console.trace(e);
    }
};

run();