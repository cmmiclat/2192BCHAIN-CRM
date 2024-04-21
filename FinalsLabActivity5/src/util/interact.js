const contractABI = require("../contract-abi.json");
const contractAddress = '0xac02BCbE8bA0f083F4e5fCa449014E74f0EEF574';
const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/olNqYsfv8nf6x0GdJGrUHT1AtssHcRdY";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => { 
  const message = await helloWorldContract.methods.message().call();
  return message;
};

export const connectWallet = async () => {
   if (window.ethereum) {
    try {
        const addressArray = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        const obj = {
            status: "Write a message in the text-field above.",
            address: addressArray[0],
        };
        return obj
    }
    catch (err) {
        return {
            address: "",
            status: "Error: " +err.message,
        };
    }
   }
   else {
    return {
        address: "",
        status: (
            <span>
                <p>
                    <a target="_blank" href={`https://metamask.io/download`}>
                        You must install Metamask, a virtual Ethereum wallet, in your browser
                    </a>
                </p>
            </span>
        ),
    };
   }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.etherum.request({
                method: "eth_accounts"
            }); 
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Write a message in the text-field above.",
                };
            }
            else {
                return {
                    address: "",
                    status: "Connect to Metamask."
                }
            }
        }
        catch (err) {
            return {
                address: "",
                status: "Error: " +err.message,
            };
        }
       }
       else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        <a target="_blank" href={`https://metamask.io/download`}>
                            You must install Metamask, a virtual Ethereum wallet, in your browser
                        </a>
                    </p>
                </span>
            ),
        };
       }
};

export const updateMessage = async (address, message) => {
  if (!window.ethereum || address == null) {
    return {
        status: "Connect your Metamask"
    }
  };

  if (message.trim() === "") {
    return {
        status: "Your message cannot be empty."
    };
  }

  const transactionParameters = {
    to: contractAddress,
    from: address,
    data: helloWorldContract.methods.update(message).encodeABI(),
  }

  try {
    const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
    });
    return {
        status: (
            <span>
                <a target="_blank" href={`https://sepolia.etherscan.io/tx/${txHash}`}>
                    View the Status of your transaction on Etherscan!
                </a>
                <br/>
                Once the transaction is verified by the network, the message will be updated automatically.
            </span>
        )
    }
  }
  catch (error) {
    return {
        status: "Error: " +error.message
    }
  }
};
