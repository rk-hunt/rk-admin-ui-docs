import React, { Fragment, useState, memo } from 'react';
import Button from 'antd/lib/button';
import BasicDrawer from 'rk-admin-ui/es/basic-drawer';

const BasicDrawerDemo = (props) => {
    const [ cardFields ] = useState([
        {
            label: 'Input',
            name: 'name',
            type: 'input',
            required: true,
            err_message: 'Please enter name'
        },
        {
            label: 'Select',
            name: 'tag',
            type: 'select',
            data: [ { id: 'programming', name: 'Programming' }, { id: 'node', name: 'Node' } ],
            display_name: 'name',
            display_value: 'name',
            mode: 'tags',
            required: true,
            err_message: 'Please select tag'
        },
        {
            label: 'Checkbox',
            name: 'checkbox',
            type: 'checkbox',
            required: true,
            err_message: null,
            text: 'Apple',
            initialValue: 'Apple'
        },
        {
            label: 'Checkbox Group',
            name: 'checkboxGroup',
            type: 'checkboxGroup',
            required: true,
            err_message: null,
            options: [ { label: 'React JS', value: 'React JS' }, { label: 'Node JS', value: 'Node JS' } ]
        },
        {
            label: 'DatePicker',
            name: 'datePicker',
            type: 'datePicker',
            required: true,
            err_message: null,
            style: { width: '100%' }
        },
        {
            label: 'RangePicker',
            name: 'rangePicker',
            type: 'rangePicker',
            required: true,
            err_message: null,
            style: { width: '100%' }
        },
        {
            label: 'MonthPicker',
            name: 'monthPicker',
            type: 'monthPicker',
            required: true,
            err_message: null,
            style: { width: '100%' }
        },
        {
            label: 'WeekPicker',
            name: 'weekPicker',
            type: 'weekPicker',
            required: true,
            err_message: null,
            style: { width: '100%' }
        },
        {
            label: 'Status',
            name: 'Status',
            type: 'switch',
            required: true,
            err_message: null
        }
    ]);
    const [ visible, setVisible ] = useState(props.visible);
    const [ loading ] = useState(false);

    return (
        <Fragment>
            <Button type='primary' onClick={() => setVisible(!visible)}>
                Open Drawer
            </Button>
            <BasicDrawer
                buttonSave={{
                    type: 'primary',
                    loading: loading
                }}
                buttonCancel={{
                    icon: 'close',
                    onClick: () => setVisible(!visible)
                }}
                columns={2}
                drawer={{
                    onClose: () => setVisible(false),
                    title: 'Basic Drawer',
                    visible: visible,
                    width: '360',
                    maskable: true
                }}
                fields={cardFields}
                loading={loading}
                onSubmit={() => console.log('submitting...')}
            />
        </Fragment>
    );
};

export default memo(BasicDrawerDemo);
