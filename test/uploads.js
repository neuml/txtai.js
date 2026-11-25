const assert = require("node:assert/strict");
const test = require("node:test");
const {Embeddings} = require("../dist");

for (const method of ["addobject", "addimage"]) {
    test(`${method} preserves Buffer slices in multipart uploads`, async (t) => {
        const client = new Embeddings("http://localhost");
        const data = Buffer.from([99, 0, 255, 65, 88]).subarray(1, 4);
        const post = t.mock.method(client, "postForm", async (endpoint, form) => {
            assert.equal(endpoint, method);
            assert.deepEqual([...new Uint8Array(await form.get("data").arrayBuffer())], [0, 255, 65]);
            assert.equal(form.get("uid"), "row-1");
            assert.equal(form.get("field"), "content");
        });
        await client[method]([data], ["row-1"], "content");
        assert.equal(post.mock.callCount(), 1);
    });
}
