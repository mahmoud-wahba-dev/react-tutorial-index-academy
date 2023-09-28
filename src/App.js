import "./App.css";
import CardDetails from "./components/CardDetails";
import NavBar from "./components/NavBar";
import img1 from "./imgs/img-1.png";
import img2 from "./imgs/distribution.png";
import NotFound from "./components/NotFound";
import FormComp from "./components/FormComp";
function App() {
  const cardTitle1 = "title1";

  const data = [
    // { title: "title 1", description: "description 1", img: img1 },
    // { title: "title 2", description: "description 2", img: img2 },
    // { title: "title 3", description: "description 3" },
    // { title: "title 4", description: "description 4" },
  ];

  const printTitle = (message) => {
    alert("this from app file " + message);
  };

    const onchangeHandler = (e) => {
      console.log(e.target.value); 
    }

  return (
    <div className="App">
      <NavBar />
      <FormComp/>
      {(data.length > 0)
        ? (data.map((item, index) => {
            console.log(index);

            return (
              <CardDetails
                key={index + 1}
                title={item.title}
                description={item.description}
                img={item.img}
                print={printTitle}
              >
                <h1>hello</h1>
                <p>world</p>
              </CardDetails>
            );
          }))
        : (<NotFound errorMsg = {"errrrrrrrrrrrrrrrror"}/>)}
      {/* <CardDetails title={data[0].title} description={data[0].description} />
      <CardDetails title={data[1].title} description={data[1].description} />
      <CardDetails title={data[2].title} description={data[2].description} /> */}
    </div>
  );
}

export default App;
