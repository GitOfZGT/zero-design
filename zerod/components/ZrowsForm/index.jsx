import React, { useState, useEffect ,useImperativeHandle} from 'react';
import {Row,Col,Form} from 'antd';
import cssClass from './style.scss';
export function ZrowsForm({value,onChange,columns},ref){
    return <div className={cssClass['z-rows-form']}>
    <Form>
        <Row type="flex" >
            
        </Row>
    </Form>
    </div>
}