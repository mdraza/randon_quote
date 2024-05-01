import { FaXTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

const Randon_quote = () => {
  const [quote, setQuote] = useState({
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison, type.fit",
  });

  const handleGetQuote = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    const randNum = Math.floor(Math.random() * data.length);
    setQuote(data[randNum]);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`,
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center bg-slate-800 h-[100vh] shadow-md">
      <div className="flex flex-col justify-center lg:w-[40%] md:w-[50%] sm:w-[80%] w-[95%] p-8 bg-slate-100 rounded-md">
        <div className="text-center">
          <p className="text-slate-900 text-lg">
            <FaQuoteLeft className="text-md inline-block mr-2" />
            {quote.text}
          </p>
          <p className="flex justify-end mt-4 text-sm text-slate-500">
            - {quote.author}
          </p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button onClick={twitter}>
            <FaXTwitter
              className="text-[25px] text-slate-800 hover:ffwrrewrw"
              title="Post in twitter"
            />
          </button>
          <button
            className="bg-slate-700 px-4 py-2 text-sm text-white rounded-md"
            onClick={handleGetQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Randon_quote;
