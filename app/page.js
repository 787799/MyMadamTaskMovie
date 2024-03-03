import Hero from "./components/hero";
import FrequentlyAskedQuestions from "./components/faq";
import List from "./components/list";
import Stats from "./components/stats";


export default function Home() {
  return (
    <>
    <div className="bg-gray-900">
    <Hero/>
    <Stats/>
    <List index={3}/>
    <FrequentlyAskedQuestions/>
    </div>


    </>
  );
}




