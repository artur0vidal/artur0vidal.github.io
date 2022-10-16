const { join } = require("path");
const fs = require("fs");

function generate() {
  const metadata = {
    image: "https://artur0vidal.github.io/image/image.png",
    animation_url: "https://artur0vidal.github.io/image/video.mp4",
    name: "Test",
    description: "Test description",
  };

  for (let i = 0; i <= 9999; i++) {
    fs.writeFile(
      join(__dirname, "item", i + ""),
      JSON.stringify({ ...metadata, ...{ name: `Test NFT Wow #${i}` } }),
      function (err) {
        if (err) throw err;
        console.log(`Complete ${i}`);
      }
    );
  }
}

generate();
