import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import CompareTable from 'react-comparison-table';
import InputContainer from './InputContainer';

import testImage from '../assets/image.jpg'

const ServicesContainer = (props) => {
    const properties = props.properties;

    const [isHomePage, setIsHomePage] = useState(true);
    const [shownData, setShownData] = useState([]);
    const [fields, setFields] = useState([]);


    let data = [];

    const dataConvertForDisplay = (obj) => {
        console.log('obj', obj)
        let products = obj.products;
        let tmpArr = [];
        products.map((product, index) => {
            let tmpObj = {
                image: testImage,

                ...product
            };
            tmpArr.push(tmpObj);
        })

        return tmpArr;
    }


    useEffect(() => {
        console.log('this is shwon data', shownData);
        getAllFields(shownData);
    }, [shownData])

    const onSubmitJson = (inputData) => {
        if (inputData === undefined) return;
        console.log(inputData)

        let resultData = dataConvertForDisplay(inputData)
        // console.log(resultData)

        setShownData(resultData)



        setIsHomePage(false);

    }

    const getAllFields = (shownData) => {
        let fieldNameObj = {};
        shownData.map((plan) => {
            fieldNameObj = Object.assign(fieldNameObj, plan);
        });
        console.log('fieldNameObj', fieldNameObj)

        let tmpArr = Object.keys(fieldNameObj);
        let realFields = tmpArr.filter(key => {
            return key !== 'image' && key !== 'Name' && key !== 'id';
        });

        setFields(realFields);
    }

    return (
        <React.Fragment>
            {isHomePage
                ? <div className="home-page">
                    <InputContainer onSubmitJson={onSubmitJson} />
                </div>
                :
                <div className="mainContainer">
                    <CompareTable
                        data={shownData}
                        features={fields}
                    />
                </div>
            }


        </React.Fragment>
    );
}

export default ServicesContainer;