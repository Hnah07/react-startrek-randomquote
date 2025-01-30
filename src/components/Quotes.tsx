import quotes from "../assets/quotes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock, faCopy } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
type RandomQuote = {
  id: number;
  quote: string;
  character: string;
};
const Quotes = () => {
  const getRandomQuote = (): RandomQuote =>
    quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setQuote] = useState<RandomQuote>(getRandomQuote());
  const notify = () => toast("Replication accomplished, Captain!");
  return (
    <>
      <main>
        <p>Star Trek The Next Generation Quote #{quote.id}</p>
        <p className="quote">"{quote.quote}"</p>
        <p className="character">- {quote.character}</p>
        <div className="copy">
          <hr />
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                quote.quote + " - " + quote.character
              );
              notify();
            }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
        <button onClick={() => setQuote(getRandomQuote())}>
          <FontAwesomeIcon icon={faHandSpock} />
        </button>
      </main>
      <ToastContainer />
    </>
  );
};
export default Quotes;
