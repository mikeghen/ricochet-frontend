import { useState } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { InchModal } from "components/swap/InchModal";
import {
  swapContract,
  DAIxAddress,
  USDCxAddress,
  WETHxAddress,
  MKRxAddress,
  WBTCxAddress,
  MATICxAddress,
  SUSHIxAddress,
  IDLExAddress,
} from "constants/polygon_config";
import ReactModal from "react-modal";

import { Button, Card } from "antd";
import React from "react";
import { getContract } from "utils/getContract";
import { tradeABI } from "constants/abis";
import { selectMain } from "store/main/selectors";
import { useShallowSelector } from "hooks/useShallowSelector";
import { Protocol } from "@uniswap/router-sdk";
import { AlphaRouter } from "@uniswap/smart-order-router";
import { CurrencyAmount, Percent, Token, TradeType } from "@uniswap/sdk-core";
import { JSBI } from "@uniswap/sdk";
import { ethers } from "ethers";
import { useTranslation } from "react-i18next";
import { getUnderlyingSupertoken } from "utils/getUnderlyingToken";
import customStyles from "./styles.module.scss";

const supportedCurrencies = [
  {
    currency: "DAIx",
    address: DAIxAddress,
    symbol: "DAI",
  },

  {
    currency: "USDCx",
    address: USDCxAddress,
  },

  {
    currency: "WETHx",
    address: WETHxAddress,
  },

  {
    currency: "MKRx",
    address: MKRxAddress,
  },

  {
    currency: "WBTCx",
    address: WBTCxAddress,
  },

  {
    currency: "MATICx",
    address: MATICxAddress,
  },

  {
    currency: "SUSHIx",
    address: SUSHIxAddress,
  },

  {
    currency: "IDLEx",
    address: IDLExAddress,
  },
];

interface IProps {}

const styles = {
  card: {
    width: "430px",
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    fontSize: "16px",
    fontWeight: "500",
  },
  input: {
    padding: "0",
    fontWeight: "500",
    fontSize: "23px",
    display: "block",
    width: "55%",
  },
  priceSwap: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    color: "#434343",
    marginTop: "8px",
    padding: "0 10px",
  },
};

interface FromTokenProps {
  logoURI: string;
  symbol: any;
}

interface ToTokenProps {
  logoURI: string;
  symbol: any;
}

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const SwapContainer: React.FC<IProps> = () => {
  const [isFromModalActive, setFromModalActive] = useState(false);
  const [fromToken, setFromToken] = useState<FromTokenProps>();
  const [toToken, setToToken] = useState<ToTokenProps>();
  const [quote, setQuote] = useState();
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [isToModalActive, setToModalActive] = useState(false);

  const state = useShallowSelector(selectMain);

  const { address, balances } = state;
  const { t } = useTranslation();

  const { web3 } = useShallowSelector(selectMain);
  const contract = getContract(swapContract, tradeABI, web3);

  const provider = new ethers.providers.Web3Provider(
    web3.currentProvider as any
  );
  const router = new AlphaRouter({ chainId: 137, provider: provider as any });

  const typedValueParsed = "100";

  async function handleSwap() {

    console.log('from: ', fromAmount, 'to: ', toAmount, 'fromToken: ', 
    fromToken, 'toToken: ', toToken,
    
    );

    let fromTokenAddress = null;
    let toTokenAddress = null;
    let amount = null;

    /*@ts-ignore*/
    fromTokenAddress = await getUnderlyingSupertoken(fromToken);
    /*@ts-ignore*/
    toTokenAddress = await getUnderlyingSupertoken(toToken);

    if (fromToken !== null) {
       amount = CurrencyAmount.fromRawAmount(
        /*@ts-ignore*/
        fromTokenAddress,
        JSBI.BigInt(typedValueParsed)
      );
  
    }

    const route = await router.route(
      /*@ts-ignore*/
      amount,
      fromTokenAddress,
      TradeType.EXACT_INPUT,
      {
        recipient: address,
        slippageTolerance: new Percent(5, 100),
        deadline: Date.now() + 1800,
      },
      { minSplits: 1, protocols: [Protocol.V3] }
    );

    console.log(route);
    if (route && fromTokenAddress !== undefined && toTokenAddress !== undefined) {
      console.log(`Quote Exact In: ${route.quote.toFixed(2)}`);
      console.log(
        `Gas Adjusted Quote In: ${route.quoteGasAdjusted.toFixed(2)}`
      );
      console.log(`Gas Used USD: ${route.estimatedGasUsedUSD.toFixed(6)}`);
      console.log(contract.methods.swap, route?.methodParameters);
      const response = contract.methods
        .swap(
          fromToken,
          toToken,
          fromAmount,
          "0",
          [
            "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            /*@ts-ignore*/
            // `${fromTokenAddress.address}`,
            /*@ts-ignore*/
            // `${toTokenAddress.address}`,
          ],
          ["500"]
        )
        .send({
          from: address,
        });
      console.log(response);
    }
    else{
      console.log(fromTokenAddress, toTokenAddress)
    }
  }

  const handleFromAmountChange = (event: any) => {
    setFromAmount(parseInt(event.target.value));
  };

  const handleToAmountChange = (event: any) => {
    setToAmount(parseInt(event.target.value));
  };
  

  return (
    <>
      {provider && (
        <div className={customStyles.wrapper}>
          <Card style={styles.card} bodyStyle={{ padding: "18px" }}>
            <Card
              style={{ borderRadius: "1rem" }}
              bodyStyle={{ padding: "0.8rem" }}
            >
              <div
                style={{
                  marginBottom: "5px",
                  fontSize: "14px",
                  color: "#434343",
                }}
              >
                From
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <input
                    type="number"
                    placeholder="0.00"
                    style={{ ...styles.input }}
                    onChange={handleFromAmountChange}
                    value={fromAmount}
                  />
                  <p style={{ fontWeight: "600", color: "#434343" }}>
                    {/* {fromTokenAmountUsd} */}
                  </p>
                </div>
                <Button
                  style={{
                    height: "fit-content",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "0.6rem",
                    padding: "5px 10px",
                    fontWeight: "500",
                    fontSize: "17px",
                    gap: "7px",
                    border: "none",
                  }}
                  onClick={() => setFromModalActive(true)}
                >
                  {fromToken ? (
                    <div>{fromToken}</div>
                  ) : (
                    <span>Select a token</span>
                  )}
                  <span>{fromToken?.symbol}</span>
                  <Arrow />
                </Button>
              </div>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <ArrowDownOutlined />
            </div>
            <Card
              style={{ borderRadius: "1rem" }}
              bodyStyle={{ padding: "0.8rem" }}
            >
              <div
                style={{
                  marginBottom: "5px",
                  fontSize: "14px",
                  color: "#434343",
                }}
              >
                To
              </div>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <input
                    placeholder="0.00"
                    style={styles.input}
                    onChange={handleToAmountChange}
                    value={toAmount}
                  />
                  <p style={{ fontWeight: "600", color: "#434343" }}>
                    {/* {toTokenAmountUsd} */}
                  </p>
                </div>
                <Button
                  style={{
                    height: "fit-content",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "0.6rem",
                    padding: "5px 10px",
                    fontWeight: "500",
                    fontSize: "17px",
                    gap: "7px",
                    border: "none",
                  }}
                  onClick={() => setToModalActive(true)}
                  type={toToken ? "default" : "primary"}
                >
                  {toToken ? <div>{toToken}</div> : <span>Select a token</span>}
                  <span>{toToken?.symbol}</span>
                  <Arrow />
                </Button>
              </div>
            </Card>
            {quote && (
              <div>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "15px",
                    color: "#434343",
                    marginTop: "8px",
                    padding: "0 10px",
                  }}
                >
                  {/* Estimated Gas: <p></p> */}
                </p>
                {/* <PriceSwap /> */}
              </div>
            )}
            <Button
              type="primary"
              size="large"
              style={{
                width: "100%",
                marginTop: "15px",
                borderRadius: "0.6rem",
                height: "50px",
              }}
              onClick={() => handleSwap()}
              // disabled={!ButtonState.isActive}
            >
              {/* {ButtonState.p} */}
              Swap
            </Button>
          </Card>
          <ReactModal
            isOpen={isFromModalActive}
            className={customStyles.modal}
            overlayClassName={customStyles.modal_overlay}
            preventScroll
          >
            <InchModal
              open={isFromModalActive}
              onClose={() => setFromModalActive(false)}
              setToken={setFromToken}
              tokenList={supportedCurrencies}
              direction="in"
            />
          </ReactModal>
          <ReactModal
            isOpen={isToModalActive}
            className={customStyles.modal}
            overlayClassName={customStyles.modal_overlay}
            preventScroll
          >
            <InchModal
              open={isToModalActive}
              onClose={() => setToModalActive(false)}
              setToken={setToToken}
              tokenList={supportedCurrencies}
              direction="out"
            />
          </ReactModal>
        </div>
      )}
    </>
  );
};