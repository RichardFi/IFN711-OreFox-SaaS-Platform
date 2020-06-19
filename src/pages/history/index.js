import React, { useState, useEffect } from 'react';
import { HistoryWrapper } from './style';
import { message, List, Space, Select, Button, Upload} from 'antd';
import { CloudDownloadOutlined, StarOutlined, FieldTimeOutlined, UploadOutlined } from '@ant-design/icons';
import storageUtils from '../../utils/storageUtils';
import { Link } from 'react-router-dom';
import moment from 'moment';


const { Option } = Select;
/*
Analysis History page
*/
export default function History() {
    const [hist, setHist] =useState([]);

    useEffect(
        // fetch all history data from the end-point
        () => {
        fetch("/getHistory", {method: 'POST' })
        .then(res => res.json())
        .then(res => setHist(res.data))
        .catch(e => message.error(`Error`))        
    },[])

    // Show and modify status component
    const AnalyseStatus = ({ icon, item }) => (
        !(storageUtils.getUser().type==="admin") ? <Space>{React.createElement(icon)}{item.status}</Space>:
        <Select 
            defaultValue={item.status} 
            style={{ width: 140 }} 
            onChange={(value)=>{
                fetch("/updateStatus", {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({value:value,requirement:item._id}),
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
    
    // download uploaded data component
    const DownloadText = ({ icon, text, href }) => (
        <Space>
            <Button type="primary" href={href[0]}>
                {React.createElement(icon)}
                {text}
            </Button>
        </Space>
    );
    
    // show upload result
    const onUpload =(info)=>{
        if (info.file.status === 'done') {
            message.success(`${info.file.name} report uploaded successfully, clients can view the report now.`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
    }

    // Show visualize result button for client account and show upload button to admin account when the analysis complete
    const DataVis = ({ icon, text, item }) => (
        !(item.status==="Completed") ?         
        <Space>            
            {"Waiting for results"}
        </Space>:
        !(storageUtils.getUser().type==="admin") ?
        <Space>
            <Button type="primary">
                <Link to='/graphs'>
                    {React.createElement(icon)}
                    {text}
                </Link>
            </Button>
            <Button type="primary">
                <a target="_blank" rel="noopener noreferrer" href={'https://storage.googleapis.com/ifn711saas/'+ storageUtils.getUser()._id+ '/' + item._id + '/report.pdf'}>Download Full Report</a>
            </Button>
        </Space>
        :
        <Space>
            <Upload name= 'file' showUploadList={false} action= '/uploadReport' data={()=>item} headers= {{authorization: 'authorization-text'}} 
            onChange={onUpload}>
                
                <Button>
                <UploadOutlined /> Click to Upload Report
                </Button>
            </Upload>
        </Space>
    );
    // show latest modified date and time
    const LatestChange = ({ icon, item }) => (
        <Space>
            {React.createElement(icon)}
                {
                    moment(item.dateModified).format('LLL')
                }
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
                    <AnalyseStatus icon={StarOutlined} item={item} key="list-vertical-star-o" />,
                    <DownloadText href={item.fileUrl} icon={CloudDownloadOutlined} text="Download" key="list-vertical-like-o" />,
                    <DataVis icon={CloudDownloadOutlined} text="Visual Results" item={item} key="list-vertical-like-o" />,
                    <LatestChange icon={FieldTimeOutlined} text="Date modified:" item={item} key="list-vertical-like-o" />,
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

