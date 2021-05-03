import {Segmentation, Textractor, Summary, Transcription, Translation, Workflow} from "txtai";

/**
 * Example pipeline and workflow functionality.
 *
 * Uses files from txtai unit tests: https://github.com/neuml/txtai/releases/download/v2.0.0/tests.tar.gz
 */
const run = async () => {
    try {
        let service = "http://localhost:8000"

        let segment = new Segmentation(service);

        let sentences = "This is a test. And another test.";

        console.log("---- Segmented Text ----");
        console.log(await segment.segment(sentences));

        let textractor = new Textractor(service);
        let text = await textractor.textract("/tmp/txtai/article.pdf")

        console.log("\n---- Extracted Text ----");
        console.log(text);

        let summary = new Summary(service);
        let summarytext = await summary.summary(text);

        console.log("\n---- Summary Text ----");
        console.log(summarytext);

        let translate = new Translation(service);
        let translation = await translate.translate(summarytext, "es");

        console.log("\n---- Summary Text in Spanish ----");
        console.log(translation);

        let workflow = new Workflow(service);
        let output = await workflow.workflow("sumspanish", [text]);

        console.log("\n---- Workflow [Extract Text->Summarize->Translate] ----");
        console.log(output);

        let transcribe = new Transcription(service);
        let transcription = await transcribe.transcribe("/tmp/txtai/Make_huge_profits.wav")

        console.log("\n---- Transcribed Text ----");
        console.log(transcription);
    }
    catch (e) {
        console.trace(e);
    }
};

run();