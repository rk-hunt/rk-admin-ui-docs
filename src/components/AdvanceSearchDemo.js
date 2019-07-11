import React from 'react';
import AdvanceSearch from 'rk-admin-ui/es/advance-search';
import 'rk-admin-ui/es/style/utils.less';

const AdvanceSearchDemo = (props) => {
    return (
        <div
            style={{
                height: 300,
                backgroundColor: '#f2f3f5',
                padding: 16
            }}
        >
            <AdvanceSearch {...props} />
        </div>
    );
};
export default React.memo(AdvanceSearchDemo);
