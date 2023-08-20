import React from 'react'

const FormField = ({ formdata, id, change }) => {

    const renderTemplate = () => {
        let formTemplate = null;
        switch (formdata.element) {
            case ('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(evt) => change({ evt, id })}
                        />
                    </div>
                )
                break;
            default:
                formTemplate = null;

        }
        return formTemplate;
    }

    return (
        <div className="">
            {renderTemplate()}
        </div>
    )
}

export default FormField