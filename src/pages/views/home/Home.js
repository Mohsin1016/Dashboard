import React from 'react'
import { Layout, Row, Col } from 'antd'
import { faBagShopping, faDollar, faExclamationCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import TopCard from '../../../components/home/TopCard';
import BottomCard from '../../../components/home/BottomCard';
import SoldItemsTable from '../../../components/home/SoldItemsTable';
import './home.css'

const Home = () => {
  return (
    <Layout className='home-layout' style={{ background: 'none' }}>
      <Row className='top-cards-container'>
        <Col>
          <TopCard
            title='New Orders'
            body='245'
            impression='20'
            bg='rgb(15,83,66)linear-gradient(90deg, rgba(15,83,66,1) 0%, rgba(17,123,71,1) 100%)'
            color='#109756'
          />
        </Col>
        <Col>
          <TopCard
            title='Pending Orders'
            body='123'
            impression='11'
            bg='rgb(204,0,0) linear-gradient(90deg, rgba(204,0,0,1) 0%, rgba(230,98,96,1) 100%)'
            color='#ff9e9b'
          />
        </Col>
        <Col>
          <TopCard
            title='Delivered Orders'
            body='150'
            impression='18'
            bg='rgb(1,15,150) linear-gradient(90deg, rgba(1,15,150,1) 0%, rgba(75,92,255,1) 100%)'
            color='#6e7bff'
          />
        </Col>
      </Row>
      <br />
      <Row className='bottom-cards-container'>
        <Col>
          <BottomCard
            title='Customers'
            body='123'
            icon={faUsers}
            bg='white'
            color='#59A7BF'
            bodyColor='black'
          />
        </Col>
        <Col>
          <BottomCard
            title='Products'
            body='540'
            icon={faBagShopping}
            bg='#2C3E50'
            color='white'
            bodyColor='white'
          />
        </Col>
        <Col>
          <BottomCard
            title='Out of Stock'
            body='125'
            icon={faExclamationCircle}
            bg='rgb(195,0,0) linear-gradient(180deg, rgba(195,0,0,1) 0%, rgba(224,98,98,1) 100%)'
            color='white'
            bodyColor='white'
          />
        </Col>
        <Col>
          <BottomCard
            title='Earnings'
            body='$10000'
            icon={faDollar}
            bg='rgb(210,74,0) linear-gradient(180deg, rgba(210,74,0,1) 0%, rgba(214,100,38,1) 100%)'
            color='white'
            bodyColor='white'
          />
        </Col>
      </Row>
      <br />
      <Row>
        <SoldItemsTable />
      </Row>
    </Layout>
  )
}

export default Home