import React, { Fragment, useState, memo } from 'react';
import Button from 'antd/lib/button';
import ModalForm from 'rk-admin-ui/es/modal-form';

const ModalFormDemo = (props) => {
    const { cardFields, ...modalProps } = props;

    const [ visible, setVisible ] = useState(false);

    return (
        <Fragment>
            <Button type='primary' onClick={() => setVisible(!visible)}>
                Open Modal Form
            </Button>
            <ModalForm
                modalProps={{
                    ...modalProps,
                    visible: visible,
                    onCancel: () => setVisible(!visible)
                }}
                fields={cardFields}
            />
        </Fragment>
    );
};

export default memo(ModalFormDemo);
