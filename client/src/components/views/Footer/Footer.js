import React from 'react'
import { Icon } from 'antd';

function Footer() {
    return (
        <div style={{
            height: '30px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p> Copyright © 2021-2022. All rights reserved.  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
