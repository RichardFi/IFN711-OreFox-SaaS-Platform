import React from "react";
import { Upload as UpLoadFile, Form, Button, Input, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
//import { reqUpload, reqRequirements } from '../../api';
//import { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Upload() {
    //const [fileList, setFileList] = useState();
    function beforeUpload(file) {
        const isType = file.type === 'application/vnd.ms-excel' || file.type === 'application/json' || file.type === 'application/x-zip-compressed';
        if (!isType) {
          message.error('You can only upload csv/json/zip files!');
        }
        return isType;
    }

    const history = useHistory()
    const props = {
        name: 'file',
        action: '/upload',
        method: 'post',
        accept: '.csv, .json .zip',
        beforeUpload: beforeUpload,
        headers: {
            authorization: 'authorization-text',
        },
        
    
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
        
    };

    const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 9 },
    };
    const normFile = e => {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

    const onFinish = values => {
        fetch("/requirements", {
            method: 'POST', 
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(values)
          })
        .then(res => res.json())
        .then(res => message.success(`${res.data.title} file uploaded successfully`))
        .catch(e => message.error(`file uploaded failed`))
        history.push("/home")
    };
    
    return (
        <Form
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            style={{margin: "50px 0"}}
        >
            <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Please only sumbit '.csv', '.json', '.zip' format files."
                rules={[{ required: true }]}
            >
                <UpLoadFile {...props}>
                    <Button>
                        <UploadOutlined /> Click to Upload
                    </Button>
                </UpLoadFile>
            </Form.Item>
            <Form.Item
                label="Project Title"
                name="title"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Requirement"
                name="requirement"
                rules={[{ required: true }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 15 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}