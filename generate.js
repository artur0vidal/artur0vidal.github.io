const { join } = require("path");
const fs = require("fs");

function generate() {
  const metadata = {
    animation_url: "https://artur0vidal.github.io/image/qr.mp4",
    name: "Trace Genesis NFT Pass",
    description:
      "A special Genesis NFT Pass collection, which will be distributed to TRACE holders " +
      "who have bought or received NFT Containers with OG NFT Cars inside. Genesis NFT Pass " +
      "will give privileges to its holders within the entire TRACE project and other " +
      "mechanics added to the project.\n\nTracer, let’s explore the world! You are a part " +
      "of OG TRACE fam.",
  };

  for (let i = 0; i <= 9999; i++) {
    fs.writeFile(
      join(__dirname, "item", i + ""),
      JSON.stringify({ ...metadata, ...{ name: `Genesis NFT Pass #${i}` } }),
      function (err) {
        if (err) throw err;
        console.log(`Complete ${i}`);
      }
    );
  }
}

generate();
