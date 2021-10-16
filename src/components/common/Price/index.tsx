import { useEffect, useState, HTMLProps } from "react";
import { AbiItem } from "web3-utils";
import ABI from "./abi.json";
import web3 from "utils/web3instance";
import { usdcxRicExchangeAddress } from "constants/polygon_config";
import { fromWei } from 'utils/balances'

type Props = {
  // any additional props here
} & HTMLProps<HTMLSpanElement>;

// load abi, create contract instance, get price, normalize price, quicc maths, return
const getPrice = async (): Promise<string> => {
  const abi: AbiItem = JSON.parse(JSON.stringify(ABI));
  const contract = new web3.eth.Contract(abi, usdcxRicExchangeAddress);
  const price = await contract.methods.getSharePrice().call();
  const normalizedPrice = typeof price === "string" ? price : price.toString();
  return fromWei(normalizedPrice, 18)
};

// return null if no price fetched, else return inline element
export default function Price(props: Props) {
  const [price, setPrice] = useState("");

  useEffect(() => {
    getPrice().then((p) => setPrice(p));
  });

  return <span {...props}>{price !== "" ? price : "-"}</span>;
}
