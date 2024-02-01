import React, { useEffect, useState } from 'react'
import {Table, Tag, Space} from 'antd'
import './questions.css'
import {publicRequest} from '../../requestMethods'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'query',
    dataIndex: 'query',
    key: 'query',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Answer</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
]
const Questions = () => {
  const [data, setData] = useState([])
  const fetchQuestions = async(req,res)=>{
    try {
      const res = await publicRequest.get("/questions")
      setData(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    fetchQuestions()
  }, [])
  console.log(data)
  return (
    <div className='table-wrapper'>
      <Table columns={columns} dataSource={data}/>
    </div>
  )
}

export default Questions