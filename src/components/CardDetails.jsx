import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function CardDetails({ title, description, img , print ,children }) {
  const handlClick = () => {
    print("a7a")
  };
console.log(children);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={() => {
            print(title)
          }} variant="primary">
            Go somewhere
          </Button>
            <div>
              {children}
            </div>
        </Card.Body>
      </Card>
    </div>
  );
}
