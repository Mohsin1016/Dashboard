import React, { useState } from 'react'
import { Modal, Form, Button, Input, Divider, Select, Layout, Typography, Upload, Row, Col } from 'antd';
import SoldItemsTable from '../../../components/home/SoldItemsTable';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const Finance = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const [monthlyData, setMonthlyData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Earnings',
        data: [1000, 20222, 3000, 500, 540, 1000, 5000, 200, 20000, 334, 5544, 7878],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  })
  const [weeklyData, setWeeklyData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: 'Earnings',
        data: [1000, 20222, 3000, 500, 540, 1000, 232],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  })
  const [yearlyData, setYearlyData] = useState({
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: 'Earnings',
        data: [1000, 20222, 3000, 500, 540, 1000, 232, 1000, 20222, 3000, 500, 540, 1000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  })
  return (
    <Layout className='layout' style={{ background: 'none' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Progress Graphs</h1>
      <Row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%' }}>
        <Col>
          <Line options={options} data={weeklyData} />
        </Col>
        <Col>
          <Line options={options} data={monthlyData} />
        </Col>
      </Row>
      <Row style={{ display: 'grid', gridTemplateColumns: '1fr', width: '100%' }}>
        <Col>
          <Line options={options} data={yearlyData} />
        </Col>
      </Row>
    </Layout>
  )
}

export default Finance