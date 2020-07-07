import React, { Component } from "react";

import {
  generateData,
  isFormValid,
  update
} from "./FormHelpers/FormActions";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formErrorMessage: "",
      formSuccess: false,
      formData: { }
    };
  }

  
  updateForm = (element,formType) => {
    const newFormData = update(element, this.state.formData, formType);
    this.emptyErrors();
    this.setState({
      formError: false,
      formData: newFormData,
      formErrorMessage: ""
    });
  };
  submitForm = (e,formType) => {
    e.preventDefault();
    let dataSubmit = generateData(this.state.formData, formType);
    let formIsValid = isFormValid(this.state.formData, formType);
    if (formIsValid) {
     this.submitAction(dataSubmit)
    } else {
      this.setState({
        formError: true,
        formErrorMessage: "fill the blanks"
      });
    }
  };

}
