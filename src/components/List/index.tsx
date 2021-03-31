import React from 'react';
import Card from '../Card';
import Col from '../Col';
import Row from '../Row';

const List: React.FC = () => {
  return (
    <Row colgap={24} rowgap={24}>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
      <Col span={2} xs={12} sm={6} md={4}>
        <Card />
      </Col>
    </Row>
  );
};

export default List;
