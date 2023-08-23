import Hero from "../component/hero";
import Hr from "../component/horizontal-line";
import {cardData} from "../helpers/cardData";

function Home() {
  return (
    <>
      <Hero />
      <Hr />
      <div className="grid gap-3 grid-cols-3 mx-20">
        {cardData.map((card, idx) =>
        <div key={idx} className="rounded-lg overflow-hidden shadow-lg flex flex-1 flex-col w-full">
        <img
          className="w-full"
          src={require(`../asset/card-top.jpg`)}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{card.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {card.price}
          </span>
        </div>
      </div>
        
        
        )}
      
      </div>
    </>
  );
}

export default Home;
