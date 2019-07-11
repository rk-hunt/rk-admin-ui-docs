import React, { Fragment, useState, memo } from 'react';
import Button from 'antd/lib/button';
import ModalForm from 'rk-admin-ui/es/modal-form';
import 'rk-admin-ui/es/style/utils.less';

const ModalFormDemo = (props) => {
    const { fields } = props;

    const [ visible, setVisible ] = useState(false);

    return (
        <Fragment>
            <Button type='primary' onClick={() => setVisible(!visible)}>
                Open Modal Form
            </Button>
            <ModalForm
                modalProps={{
                    visible: visible,
                    onCancel: () => setVisible(!visible),
                    cancelText: 'Cancel',
                    okText: 'Save',
                    title: 'New Category'
                }}
                fields={props.fields}
            />
        </Fragment>
    );
};

export default memo(ModalFormDemo);
