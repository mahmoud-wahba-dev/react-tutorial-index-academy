import Alert from "react-bootstrap/Alert";

export default function NotFound({ errorMsg }) {
    console.log(errorMsg);
  return (
    <div>
      <Alert variant="danger"> {errorMsg}</Alert>
    </div>
  );
}
