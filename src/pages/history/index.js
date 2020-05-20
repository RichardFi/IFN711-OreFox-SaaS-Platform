import React, { useState, useEffect } from 'react';
import { HistoryWrapper } from './style';
import { message, List, Space, Select, Button} from 'antd';
import { CloudDownloadOutlined, StarOutlined } from '@ant-design/icons';
import storageUtils from '../../utils/storageUtils';

const { Option } = Select;

export default function History() {
    const [hist, setHist] =useState([]);

    useEffect(
        () => {
        fetch("/getHistory", {method: 'POST' })
        .then(res => res.json())
        .then(res => setHist(res.data))
        .catch(e => message.error(`Error`))        
    },[])

    const AnalyseStatus = ({ icon, text, href }) => (
        !(storageUtils.getUser().type==="admin") ? <Space style={{ width: 140 }}>{React.createElement(icon)}{text.status}</Space>:     
        <Select 
            defaultValue={text.status} 
            style={{ width: 140 }} 
            onChange={(value)=>{
                fetch("/updateStatus", {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({value:value,requirement:text._id}),
                    })
                    .then(message.success(`Requirement status update saved!`))
                    .catch(e => message.error(`Error`))
            }}
        >
            <Option value="To be confirmed">To be confirmed</Option>
            <Option value="Confirmed">Confirmed</Option>
            <Option value="Analysing">Analysing</Option>
            <Option value="Completed">Completed</Option>
        </Select>
      );

    const DownloadText = ({ icon, text, href }) => (
        <Space>
            <Button type="primary" href={href[0]["response"]}>
                {React.createElement(icon)}
                {text}
            </Button>
        </Space>
    );
    
    return (
        <HistoryWrapper>
            <List
                pagination={{pageSize: 5}}
                itemLayout="vertical"
                dataSource={hist}
                renderItem={item => (
                <List.Item
                actions={[
                    <AnalyseStatus icon={StarOutlined} text={item} key="list-vertical-star-o" />,
                    <DownloadText href={item.fileUrl} icon={CloudDownloadOutlined} text="Download" key="list-vertical-like-o" />,
                  ]}>
                    <List.Item.Meta
                    title={item.title}
                    description={item.require}
                    />
                </List.Item>
                )}
            />
        </HistoryWrapper>
    )

}

