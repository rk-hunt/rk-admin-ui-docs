import React, { useState, useReducer } from 'react';
import EditableTable from 'rk-admin-ui/lib/editable-table';
import { Button } from 'antd';
import './style.css';

const demoReducer = (state, action) => {
    switch (action.type) {
        case 'new':
            return {
                ...state,
                payload: state.payload.concat(action.payload)
            };
        case 'update':
            return {
                ...state,
                payload: state.payload.filter((item, index) => {
                    if (item.id === action.payload.id) {
                        state.payload[index].name = action.payload.name;
                        state.payload[index].quantity = action.payload.quantity;
                        state.payload[index].price = action.payload.price;
                        state.payload[index].uom_id = action.payload.uom_id;
                        state.payload[index].amount = action.payload.qty * action.payload.price;
                    }
                    return state.payload;
                })
            };
        case 'delete':
            let payload = Object.assign([], state.payload);
            let indexToRemove = payload.findIndex((item) => item.id === action.payload.id);
            if (indexToRemove > -1) payload.splice(indexToRemove, 1);
            return {
                ...state,
                payload
            };
        default:
            return { ...state };
    }
};

const EditableTableDemo = (props) => {
    const initialState = {
        payload: [
            {
                id: Date.now(),
                name: 'Mac Book Pro, 2019',
                quantity: 1,
                uom_id: 1,
                price: 2500.0,
                amount: 2500.0
            },
            {
                id: Date.now(),
                name: 'Dell SPS 2018',
                quantity: 1,
                uom_id: 2,
                price: 1800.0,
                amount: 1800.0
            }
        ]
    };
    const [ state, dispatch ] = useReducer(demoReducer, initialState);

    const _onFieldChanged = (form, name, record, index) => {
        if (editable === false) {
            form.setFieldsValue({ [name]: record[name] });
            return;
        }
        form.validateFields((error, value) => {
            if (error) return;
            form.setFieldsValue({ amount: parseFloat(value.quantity) * parseFloat(value.price) });
        });
    };

    const newRow = () => {
        dispatch({
            type: 'new',
            payload: {
                id: Date.now(),
                name: '',
                quantity: 1,
                uom_id: 1,
                price: 0.0,
                amount: 0.0
            }
        });
    };

    const [ editable, setEditable ] = useState(props.editable);
    return (
        <React.Fragment>
            <Button onClick={newRow} type='primary' style={{ marginBottom: 16, marginRight: 16 }}>
                New Row
            </Button>
            <Button onClick={() => setEditable(!editable)} type='primary' style={{ marginBottom: 16 }}>
                {!editable ? 'Editable' : 'Un-Editable'}
            </Button>
            <EditableTable
                editable={editable}
                columns={props.columns}
                dataSource={state.payload}
                pagination={false}
                bordered={true}
                onFieldChange={_onFieldChanged}
                className='basic-table editable-table'
            />
        </React.Fragment>
    );
};

export default React.memo(EditableTableDemo);
