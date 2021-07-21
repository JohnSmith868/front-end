import React from 'react';
import { FloatingLabel, Button, Form } from 'react-bootstrap';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import './InputContainer.css';

const InputContainer = (props) => {
    const properties = props.properties;
    const darktheme = {
        background: 'black',
        string: '#DAA520'
    }

    const onChange = (e) => {
        console.log(e);
    }

    let preDefineObject = {
        'products': [
            {
                'Standard Plan':{
                    "General":true
                }
            }
        ]
    }

    return (
        <React.Fragment>
            <div className="input-container-main">
                <div className="input-container">
                    <JSONInput
                        id='a_unique_id'
                        placeholder={preDefineObject}
                        colors={darktheme}
                        locale={locale}
                        height='550px'
                        onChange={onChange}
                    />
                </div>
                <div className="submit-button">
                    <Button variant="primary">Submit</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InputContainer;