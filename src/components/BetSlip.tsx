"use client";

import { FaChevronDown, FaChevronUp, FaSpinner } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { FaTimes } from "react-icons/fa";
import Popup from "@/components/events/Popup";
import { useAppContext } from "@/components/Context";
import useGetAddress from "@/hooks/useGetAddress";
import useGetBalance from "@/hooks/useGetBalance";
import useTransaction from "@/hooks/useTransaction";

export interface IBetSlipBet {
  id: string;
  chosen: string;
  bet: string;
  match: string;
  odds: number;
}

function Bet(bet: IBetSlipBet) {
  const { bets: [, setBets] } = useAppContext();

  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-2">
      <div className="flex-1 pr-4">
        <p className="text-gray-200">
          <span className="font-bold">{bet.chosen}</span> - {bet.bet}
        </p>
        <p className="text-sm text-gray-400">{bet.match}</p>
      </div>
      <div className="flex items-center justify-center flex-row">
        <p className="text-white text-md pr-2">{bet.odds}</p>
        <FaTimes
          onClick={() => {
            setBets((bets) => bets.filter((b) => b.id !== bet.id));
          }}
          className="text-gray-400"
        />
      </div>
    </div>
  );
}

export default function Betslip() {
  const [expand, setExpand] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const {
    bets: [bets, setBets],
    show: [show, setShow],
    amount: [, setAmount],
  } = useAppContext();
  const [{ error, success }, dispatch] = useTransaction("cUSD");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const address = useGetAddress();
  const [balance, getBalance] = useGetBalance();
  const [placedBet, setPlacedBet] = useState<boolean>(false);
  const [isPlacingBet, setIsPlacingBet] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body")!;
    body.style.overflow = expand ? "hidden" : "auto";
  }, [expand]);

  useEffect(() => {
    setAmount(balance);
  }, [balance, setAmount]);

  useEffect(() => {
    if (!address || !placedBet) {
      return;
    }

    if (!error) {
      setBets([]);
      setShow(false);
      setExpand(false);
      setQuantity(0);
      setShowPopup(true);
      getBalance(address);
    } else {
      setErrorMessage(error);
    }
    setPlacedBet(false);
    setIsPlacingBet(false);
  }, [error, setBets, setShow, success, getBalance, address, placedBet]);

  const handleClose = () => {
    if (bets.length === 0) {
      setShow(false);
      setExpand(false);
    } else {
      setExpand(false);
      setErrorMessage("");
      setQuantity(0);
    }
  };

  useEffect(() => {
    if (bets.length === 0) {
      setShow(false);
      setExpand(false);
    }
  }, [bets, setShow]);

  const handlePlaceBet = async () => {
    setIsPlacingBet(true);
    await dispatch("0x6E2D3e6a1D03f196f86311F773abC019Eb098fD9", quantity);
    setPlacedBet(true);
  };

  return (
    <>
      {show && (
        <>
          <div
            className={`fixed bottom-0 w-[24rem] bg-gray-700 text-white flex justify-center items-end z-[150] transition-all duration-300 mb-16`}
          >
            <div className="flex items-center justify-between w-full p-4">
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">Betslip</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-sm text-gray-400">
                  {bets.length} {bets.length === 1 ? "bet" : "bets"}
                </p>
                <button
                  onClick={() => setExpand(!expand)}
                  className="text-bb-accent hover:text-gray-400"
                >
                  {expand ? <FaChevronDown /> : <FaChevronUp />}
                </button>
              </div>
            </div>
          </div>
          {expand && (
            <>
              <div
                onClick={handleClose}
                className={`fixed bottom-0 mx-auto w-[24rem] h-full bg-gray-900 bg-opacity-75 text-white flex justify-center items-end z-[150] transition-opacity ${
                  show ? "opacity-100" : "opacity-0"
                }`}
              >
              </div>
              <div className="fixed bottom-0 mx-auto w-[24rem] bg-gray-800 rounded-t-lg shadow-lg max-w-md p-4 z-[151]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">Betslip</h2>
                  <button
                    onClick={handleClose}
                    className="text-bb-accent hover:text-gray-400"
                  >
                    <FaChevronDown />
                  </button>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  {bets.map((bet, index) => (
                    <Bet {...bet} key={`betslip-${index}`} />
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-neutral-400">Stake</p>
                    <input
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      type="number"
                      placeholder="5.00"
                      min="0.2"
                      className="bg-gray-700 text-white px-4 py-2 rounded-md w-24"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-neutral-400">Possible winnings</p>
                    <p className="text-white font-bold">
                      {(
                        quantity * bets.reduce((acc, bet) => acc + bet.odds, 0)
                      ).toFixed(2)} $
                    </p>
                  </div>
                  {errorMessage && (
                    <div className="flex flex-row justify-between items-center w-full overflow-scroll mx-auto">
                      <p className="text-bb-error text-xs">{errorMessage}</p>
                    </div>
                  )}
                  <button
                    disabled={!address || quantity <= 0 || isPlacingBet}
                    onClick={handlePlaceBet}
                    className={`${
                      address
                        ? "bg-bb-accent hover:bg-orange-600"
                        : "bg-neutral-400 hover:bg-neutral-500"
                    } text-white px-4 py-2 rounded-md w-full disabled:opacity-50 flex justify-center items-center gap-2`}
                  >
                    {isPlacingBet
                      ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Placing bet...
                        </>
                      )
                      : (
                        "Place Bet"
                      )}
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
      {showPopup && <Popup fn={() => setShowPopup(false)} />}
    </>
  );
}
