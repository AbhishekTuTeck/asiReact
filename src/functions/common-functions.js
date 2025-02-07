import _ from 'lodash';
export const function_validate = (required_fields, data_fields) => {
    let status = 1;
    _.forEach(required_fields, (val) => {
        switch (val.field_type) {
            case 'default':
                if (!data_fields[val.field_name]) {
                    status = 0;
                }
                break;
            case 'reg_exp':
                if (!data_fields[val.field_name]) {
                    status = 0;
                } else {
                    if (!val.reg_exp.test(data_fields[val.field_name])) {
                        status = 0;
                    }
                }
                break;
            case 'reg_exp_non_required':
                if (!!data_fields[val.field_name]) {
                    if (!val.reg_exp.test(data_fields[val.field_name])) {
                        status = 0;
                    }
                }
                break;
        }
    });
    return status
}

export const function_return_validation = (validation_obj, is_submitted = false) => {
    const { type, value, reg_exp = "", title = "" } = validation_obj;

    if (is_submitted) {
        switch (type) {
            case 'default':
                if (!value) {
                    return {
                        status: false,
                        message: "Please Enter " + title
                    }
                } else {
                    return {
                        status: true,
                        message: "Looks Good!"
                    }
                }
            case 'select_field':
                if (!value) {
                    return {
                        status: false,
                        message: "Please Select " + title
                    }
                } else {
                    return {
                        status: true,
                        message: "Looks Good!"
                    }
                }
            case 'reg_exp':
                if (!value) {
                    return {
                        status: false,
                        message: "Please Enter " + title
                    }
                } else {
                    if (!reg_exp.test(value)) {
                        return {
                            status: false,
                            message: "Please Enter Valid" + title
                        }
                    } else {
                        return {
                            status: true,
                            message: "Looks Good!"
                        }
                    }
                }
            case 'reg_exp_non_required':
                if (!!value) {
                    if (!reg_exp.test(value)) {
                        return {
                            status: false,
                            message: "Please Enter Valid" + title
                        }
                    } else {
                        return {
                            status: true,
                            message: "Looks Good!"
                        }
                    }
                }
        }
    } else {
        return {
            status: true,
            message: null,
        }
    }
}