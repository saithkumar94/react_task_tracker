import Header from "./components/Header";

const App = () => {
  const name = 'Sam';
  return (
    <div className="container">
      <Header/>
      <h1>Hello from React</h1>
      <h2>Hello {name} your id:{224*100}</h2>
    </div>
  );
}

export default App;
