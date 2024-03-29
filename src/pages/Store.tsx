import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

export const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3' >
      {storeItems.map(items => <Col key={items.id}>
      <StoreItem {...items} />
      </Col>)}
    </Row>
    </>
  )
}
