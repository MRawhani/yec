import React, { Component } from "react";

import FormFeild from "../FormHelpers/FormFeild";

import Form from "../Form";

export default class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formError: false,
      formErrorMessage: "",
      formSuccess: false,
      formPending: false,
      formData: {
        firstName: {
          element: "input",
          value: "",
          config: {
            name: "firstName",
            type: "text",
            placeholder: "First Name",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        lastName: {
          element: "input",
          value: "",
          config: {
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
          },

          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        email: {
          element: "input",
          value: "",
          config: {
            name: "email",
            type: "text",
            placeholder: "Email",
          },

          validation: {
            required: true,
            email: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        gender: {
          element: "select",
          value: "",
          config: {
            name: "gender",
            options: [
              { key: "male", value: "male" },
              { key: "female", value: "female" },
            ],
            placeholder: "Gender",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        dateOfBirth: {
          element: "date",
          value: "",
          config: {
            name: "dateOfBirth",
            type: "date",
            placeholder: "Date Of Birth",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        governate: {
          element: "input",
          value: "",
          config: {
            name: "governate",
            type: "text",
            placeholder: "Governate",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        mobile: {
          element: "input",
          value: "",
          config: {
            name: "mobile",
            type: "text",
            placeholder: "Mobile",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        education: {
          element: "input",
          value: "",
          config: {
            name: "education",
            type: "text",
            placeholder: "Education Level",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        job: {
          element: "input",
          value: "",
          config: {
            name: "job",
            type: "text",
            placeholder: "Current Job Title",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        expereince: {
          element: "input",
          value: "",
          config: {
            name: "expereince",
            type: "text",
            placeholder: "Relevent Expereince Description",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        acheivements: {
          element: "input",
          value: "",
          config: {
            name: "acheivements",
            type: "text",
            placeholder: "List of Acheivements",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
        },
        random: {
          element: "input",
          value: "secret",
          config: {
            name: "random",
            type: "hidden",
            placeholder: "random",
          },
          validation: {
            required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          dontShowLable: true,
        },
        empty: {
          element: "input",
          value: "",
          config: {
            name: "empty",
            type: "hidden",
            placeholder: "empty",
          },
          validation: {
            //   required: true,
          },
          valid: true,
          touched: false,
          validationMessage: "",
          dontShowLable: true,
        },
      },
    };
  }
  emptyErrors = () => {
    //when input change
  };
  postDataToServer = (data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}apply/registerNew`;
    console.log(data);

    const otherParams = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    debugger;
    this.setState({ formPending: true });
    fetch(url, otherParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === false || data.ok === false || data.errors) {
          throw new Error(data.errors || "");
        }
        this.setState({
          formPending: false,
          formError: false,
          formSuccess: true,
        });
      })
      .catch((err) => {
        this.setState({
          formPending: false,
          formError: true,
          formSuccess: false,
          formErrorMessage: err[0]
            ? err[0].message
              ? err[0].message
              : "Error! Try Again"
            : "Error! Try Again",
        });
      });
  };
  submitAction = (data) => {
    console.log(data);
    this.postDataToServer(data);
  };
  renderFormFeilds = () => {
    const feilds = Object.keys(this.state.formData);

    return feilds.map(
      (feild, i) =>
        (
          <FormFeild
            id={feild}
            key={i}
            formData={this.state.formData[feild]}
            change={(element) => this.updateForm(element)}
            isError={this.state.formError}
          />
        )
    );
  };
  render() {
    const {
      formPending,
      formErrorMessage,
      formError,
      formSuccess,
    } = this.state;
    return (
      <form className="form" onSubmit={this.submitForm} action="">
        {formError && (
          <div
            style={{
              backgroundColor: "tomato",
              padding: "20px",
              color: "#fff",
            }}
          >
            {formErrorMessage}
          </div>
        )}
        {formSuccess && (
          <div
            style={{
              backgroundColor: "yellowgreen",
              padding: "20px",
              color: "#fff",
            }}
          >
            Success
          </div>
        )}
        {this.renderFormFeilds()}
        <input
          onClick={this.submitForm}
          type="button"
          disabled={formPending}
          value={`${formPending ? "..." : "APPLY"}`}
          className="cta-btn cta-btn--filled "
        />
      </form>
    );
  }
}
