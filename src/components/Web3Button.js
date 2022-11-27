import React from "react";
import { Web3Button } from "@thirdweb-dev/react";

const Web3Button = () => {
  return (
    <Web3Button
      accentColor="#9045fe"
      contractAbi={Blog["abi"]}
      contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
      colorMode="dark"
      action={async (contract) => {
        await contract.call("createPost", title, content, {
          gasLimit: 1000000,
          value: 1000000000000,
        });
      }}
      onSuccess={() => {
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      }}
    >
      Publish
    </Web3Button>
  );
};

export default Web3Button;
