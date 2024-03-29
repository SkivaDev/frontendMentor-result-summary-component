import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import data from "./data.json";

function App() {
  const [items, setItems] = useState(data);

  return (
    <div className="md:flex md:justify-center md:items-center md:h-screen md:max-w-2xl md:mx-auto">
      <section className="md:flex bg-white shadow">
        <div className="bg-div p-8 md:pt-10 text-center text-white rounded-b-3xl md:rounded-3xl md:flex-1 md:flex md:flex-col md:justify-center md:items-center ">
          <h3 className="mb-10">Your Result</h3>
          <div className="flex justify-center items-center">
            <p className="bg-circle w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center gap-1 rounded-full text-white text-3xl md:text-6xl font-bold">
              76
              <span className="text-slate-200 text-base font-normal">
                of 100
              </span>
            </p>
          </div>
          <h2 className="my-6 text-lg md:text-2xl font-bold text-white">Great</h2>
          <p className="">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-8 md:flex-1">
          <h2 className="text-slate-700 mb-6 text-lg font-bold">Summary</h2>
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg shadow"
                style={{
                  backgroundColor: `${item.color}15`,
                }}
              >
                <h3
                  className="flex items-center gap-2"
                  style={{
                    color: item.color,
                  }}
                >
                  <img src={item.icon} alt="" />
                  {item.category}
                </h3>
                <p className="flex items-center gap-2 text-slate-500">
                  <span className="text-slate-700 font-bold">{item.score}</span>{" "}
                  / 100
                </p>
              </div>
            ))}
          </div>
          <button className="bg-slate-700 py-4 px-6 rounded-full text-white w-full mt-6 hover:bg-indigo-600 transition-all duration-200">
            Continue
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
