import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col>{JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
};
