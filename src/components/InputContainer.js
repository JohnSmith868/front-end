import React, { useState, useEffect } from 'react';
import { FloatingLabel, Button, Form } from 'react-bootstrap';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './InputContainer.css';

const InputContainer = (props) => {
    const { onSubmitJson } = props;
    const [inputData, setInputData] = useState(null);
    const darktheme = {
        background: 'black',
        string: '#DAA520'
    }

    const onChange = (e) => {

        
            setInputData(e.jsObject);
            console.log(inputData)
        


    }


    useEffect(() => {
        const firstRun = () => {
            let preDefineObject = {
                products: [
                    {
                        'Name': 'Standard Plan',
                        'id':'1',
                        General: 'true'

                    },
                    {
                        'Name': 'Premium Plan',
                        'id':'2',
                        Specilist: 'true'

                    }
                ]
            }
            setInputData(preDefineObject);
            console.log(inputData)
        }
        firstRun();
    }, []);


    const handleOnClick = () => {
        console.log(inputData)
        onSubmitJson(inputData);
    }

    return (
        <React.Fragment>
            <div className="input-container-main">
                <div className="input-container">
                    <JSONInput
                        id='a_unique_id'
                        placeholder={inputData}
                        colors={darktheme}
                        locale={locale}
                        height='550px'
                        onChange={onChange}
                    />
                </div>
                <div className="submit-button">
                    <Button onClick={handleOnClick} variant="primary" size="lg">Submit</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InputContainer;