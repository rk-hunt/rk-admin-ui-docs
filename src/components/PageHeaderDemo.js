import React, { useState, useEffect, memo } from 'react';
import PageHeader from 'rk-admin-ui/es/page-header';
import './style.css';

const PageHeaderDemo = (props) => {
    const [ isLoading, setIsLoading ] = useState(props.isLoading);
    const [ popoverTitle, setPopoverTitle ] = useState(props.popoverTitle);
    const { leftActionControls, popoverDropdownItems, rightActionControls, showAction } = props;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setPopoverTitle('All Categories');
        }, 3000);
    }, []);

    const handlePopover = ({ item }) => setPopoverTitle(item.props.children);

    return (
        <PageHeader
            title={popoverTitle}
            showAction={showAction}
            leftActionControls={isLoading ? null : leftActionControls}
            rightActionControls={isLoading ? null : rightActionControls}
            popoverDropdownItems={popoverDropdownItems}
            isLoading={isLoading}
        />
    );
};

export default memo(PageHeaderDemo);
