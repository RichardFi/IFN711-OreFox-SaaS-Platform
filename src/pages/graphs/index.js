import React, { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgChartsReact } from 'ag-charts-react';
import * as agCharts from 'ag-charts-community';
import { Input, Button, Form, Select, Row, Col } from 'antd';
import demo from '../../statics/demo.jpg';

const { Option } = Select;

export default function Graphs() {
    const [rowData, setRowData] = useState([]);
    const [element, setElement] = useState('');
    const [target, setTarget] = useState('');

    const columns = [
        { headerName: "S", field: "S" },
        { headerName: "Mo", field: "Mo" },
        { headerName: "Sb", field: "Sb" },
        { headerName: "Ag", field: "Ag" },
        { headerName: "Au", field: "Au" },
        { headerName: "Cu", field: "Cu" },

    ];

    useEffect(
        () => {
            fetch("/getData", { method: 'POST' })
                .then(res => res.json())
                .then(data =>
                    data.data.map(element => {
                        return {
                            Cu: element.Cu,
                            S: element.S,
                            Mo: element.Mo,
                            Sb: element.Sb,
                            Ag: element.Ag,
                            Au: element.Au,
                        };
                    })
                )
                .then(elements => setRowData(elements));
        }, [])
    //Object.keys(res.data[0]))
    const options = {
        data: rowData,
        height: 500,
        title: {
            text: 'Correlation',
            fontSize: 18,
        },
        series: [{
            type: 'scatter',
            xKey: element,
            yKey: target,
        }],
        legend: {
            enabled: false
        },
        axes: [
            {
                type: 'number',
                position: 'bottom',
                title: { text: element },
                nice: false,
            },
            {
                type: 'number',
                position: 'left',
                title: { text: target },
                nice: false,
            },
        ],
    }
    const handleOnChangeElement = values => {
        setElement(values)
    }

    const handleOnChangeTarget = values => {
        setTarget(values)
    }
    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={8}>
                    <Form
                        layout="inline"
                        initialValues={{ remember: true }}
                        style={{ margin: "20px" }}
                    >
                        <Form.Item name="element" label="element">
                            <Select
                                placeholder="Element"
                                onChange={handleOnChangeElement}
                            >

                                {columns.map(element => <Option key={element.headerName} value={element.headerName}>{element.headerName}</Option>)}

                            </Select>
                        </Form.Item>
                        <Form.Item name="target" label="Target element">
                            <Select
                                placeholder="Target"
                                onChange={handleOnChangeTarget}
                            >

                                <Option value="Au">Au</Option>
                                <Option value="Cu">Cu</Option>

                            </Select>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 12, offset: 15 }}>
                            <Button type="primary" >
                                <a target="_blank" rel="noopener noreferrer" href='https://storage.googleapis.com/ifn711saas/5ebaa6c1f2967f60d097d7b0/AnalysisReport.pdf'>View Full Report</a>
                            </Button>
                        </Form.Item>
                    </Form>
                    <AgChartsReact options={options} />
                </Col>

                <Col span={10}>
                    <img style={{ width: '100%', height: '100%' }} alt={"Cluster img"} src={demo} />
                </Col>
            </Row>

        </div>
    )
}
