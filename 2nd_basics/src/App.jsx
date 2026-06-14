import Card from "./components/Card";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="bg-green-400 inline-block p-4 rounded">
        <Card  username="raju" buttongreen/>
        <Card username="susil" buttonred />
        
      </h1>
    </div>
  );
}

export default App;
