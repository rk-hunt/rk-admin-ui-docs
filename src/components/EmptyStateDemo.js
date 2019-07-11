import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import EmptyState from 'rk-admin-ui/es/empty-state';
import 'rk-admin-ui/es/style/utils.less';

const EmptyStateDemo = (props) => {
    return (
        <Row className='h-100-per'>
            <Col span={24} className='h-100-per'>
                <EmptyState {...props} />
            </Col>
        </Row>
    );
};
export default React.memo(EmptyStateDemo);
