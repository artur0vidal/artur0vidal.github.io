const fs = require("fs");

function generate() {
  const metadata = {
    image:
      "https://gateway.pinata.cloud/ipfs/QmbJ8h6vNeova1SDbrJAiqQuMsCmGyuPHy7xuQ3y34TjSd",
    name: "Trace NFT Pass HIDE",
    description:
      "A special Genesis NFT Pass collection, which will be distributed to holders who have bought or " +
      "received NFT Containers with OG NFT Cars inside. Genesis NFT Pass is a NFTs in metaverse Trace " +
      "that is not linked to Drive-and-Earn mechanics only and will give privileges to its holders " +
      "within the entire Trace project and other mechanics added to the project. For example, " +
      "participation in various future Airdrops conducted by us (developer) specially for Genesis " +
      "NFT Pass holders.",
  };

  for (let i = 0; i <= 9999; i++) {
    fs.writeFile(
      `./upload/${i}`,
      JSON.stringify({ ...metadata, ...{ name: `Trace NFT Pass HIDE #${i}` } }),
      function (err) {
        if (err) throw err;
        console.log(`Complete ${i}`);
      }
    );
  }
}

generate();
