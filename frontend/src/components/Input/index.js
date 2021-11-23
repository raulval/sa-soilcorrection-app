import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group className="mb-4" controlId="formBasicText">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </Form.Group>
  );
};

export default Input;
