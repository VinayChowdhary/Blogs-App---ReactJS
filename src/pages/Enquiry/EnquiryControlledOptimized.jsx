import { useState } from "react";

const EnquiryControlledOptimized = () => {
  // const [name, setName] = useState("");
  // const [mobNo, setMobNo] = useState("");
  // const [message, setMessage] = useState("");

  // const [nameError, setNameError] = useState(false);
  // const [mobNoError, setMobNoError] = useState(false);
  // const [messageError, setMessageError] = useState(false);

  const initialFormFields = {
    name: "",
    mobNo: "",
    message: "",
    enquiryDept: "DEFAULT",
    otherEnquiryDept: "",
  };

  const [enquiryFormFields, setEnquiryFormFields] = useState(initialFormFields);
  const [enquiryFormFieldsError, setEnquiryFormFieldsError] = useState({
    nameError: false,
    mobNoError: false,
    messageError: false,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(enquiryFormFields);
    // TO DO Call the API and send the data
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        //request headers
        "Content-Type": "application/json",
        "CLIENT-ID": "ABCD1234", //dummy client id
      },
      body: JSON.stringify(enquiryFormFields), //request body
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log("Response :", data);
        alert("Enquiry submitted successfully");
        //clear the form  after submission
        setEnquiryFormFields(initialFormFields);
      })
      .catch((err) => {
        console.log("ERROR OCCURRED WHILE FETCHING THE DATA", err);
      });
  };
  // const onNameChange = (e) => {
  //   // console.log("Name change:", e.target.value);
  //   //max length 12 char
  //   if (e.target.value.length <= 12) {
  //     // setEnquiryFormFields((prevState) => ({
  //     //   ...prevState,
  //     //   name: e.target.value,
  //     // }));
  //     setEnquiryFormFields({ ...enquiryFormFields, name: e.target.value });
  //     setEnquiryFormFieldsError({
  //       ...enquiryFormFieldsError,
  //       nameError: false,
  //     });
  //   } else {
  //     //store the error here
  //     setEnquiryFormFieldsError({ ...enquiryFormFieldsError, nameError: true });
  //   }
  // };

  // const onInputChange = (e) => {
  //   console.log(e.target.name);
  //   e.target.name === "mobNo"
  //     ? setEnquiryFormFields({ ...enquiryFormFields, mobNo: e.target.value })
  //     : setEnquiryFormFields({ ...enquiryFormFields, message: e.target.value });
  // };
  const onInputChange = (e) => {
    //console.log(e.target.name);
    const isValid = validateFields(e.target.name, e.target.value);
    if (isValid) {
      setEnquiryFormFields({
        ...enquiryFormFields,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validateFields = (fieldName, fieldValue) => {
    if (fieldName === "name") {
      //validation for name
      if (fieldValue.length <= 12) {
        setEnquiryFormFieldsError({
          ...enquiryFormFieldsError,
          nameError: false,
        });
        return true;
      } else {
        setEnquiryFormFieldsError({
          ...enquiryFormFieldsError,
          nameError: true,
        });
        return false;
      }
    } else if (fieldName === "mobNo") {
      //validation for mobile no
      if (fieldValue.length <= 10) {
        setEnquiryFormFieldsError({
          ...enquiryFormFieldsError,
          mobNoError: false,
        });
        return true;
      } else {
        setEnquiryFormFieldsError({
          ...enquiryFormFieldsError,
          mobNoError: true,
        });
        return false;
      }
    } else if (fieldName === "message") {
      if (fieldValue.length <= 30) {
        setEnquiryFormFieldsError({
          ...enquiryFormFieldsError,
          messageError: false,
        });
        return true;
      } else {
        setEnquiryFormFieldsError({
          ...enquiryFormFieldsError,
          messageError: true,
        });
        return false;
      }
    } else if (fieldName === "enquiryDept") {
      return true;
    }
  };

  // const onMobNoChange = (e) => {
  //   // console.log("Mobile change:", e.target.value);
  //   //Assume no conditional logic is there and we have to club the mob no and message ones into one function
  //   if (e.target.value.length <= 10) {
  //     setEnquiryFormFields({ ...enquiryFormFields, mobNo: e.target.value });
  //     setEnquiryFormFieldsError({
  //       ...enquiryFormFieldsError,
  //       mobNoError: false,
  //     });
  //   } else {
  //     setEnquiryFormFieldsError({
  //       ...enquiryFormFieldsError,
  //       mobNoError: true,
  //     });
  //   }
  // };
  // const onMessageChange = (e) => {
  //   // console.log("Message change:", e.target.value);
  //   if (e.target.value.length <= 30) {
  //     setEnquiryFormFields({ ...enquiryFormFields, message: e.target.value });
  //     setEnquiryFormFieldsError({
  //       ...enquiryFormFieldsError,
  //       messageError: false,
  //     });
  //   } else {
  //     setEnquiryFormFieldsError({
  //       ...enquiryFormFieldsError,
  //       messageError: true,
  //     });
  //   }
  // };

  // const onEnquiryDeptChange = (e) => {
  //   // console.log("On enquiry dept change", e.target.value);
  //   setEnquiryFormFields({ ...enquiryFormFields, enquiryDept: e.target.value });
  // };
  const onOtherEnquiryDeptChange = (e) => {
    // console.log("On  other enquiry dept change", e.target.value);
    setEnquiryFormFields({
      ...enquiryFormFields,
      otherEnquiryDept: e.target.value,
    });
  };

  return (
    <div>
      <hr />
      <h3>Controlled Enquiry Form - Optimized</h3>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="name">Enter your Name : </label>
          <input
            onChange={onInputChange}
            name="name"
            id="name"
            type="text"
            value={enquiryFormFields.name}
          />{" "}
          <span
            style={{
              display: enquiryFormFieldsError.nameError
                ? "inline-block"
                : "none",
              color: "red",
            }}
          >
            The maximum allowed characters are 12
          </span>
        </div>
        <div>
          <label htmlFor="mobNo">Enter your Mobile number : </label>
          <input
            onChange={onInputChange}
            name="mobNo"
            id="mobNo"
            type="number"
            value={enquiryFormFields.mobNo}
          />{" "}
          <span
            style={{
              display: enquiryFormFieldsError.mobNoError
                ? "inline-block"
                : "none",
              color: "red",
            }}
          >
            The mobile number should be of 10 digits
          </span>
        </div>
        <div>
          <label htmlFor="message">Enter your Message : </label>
          <textarea
            onChange={onInputChange}
            name="message"
            id="message"
            value={enquiryFormFields.message}
          ></textarea>
          <span
            style={{
              display: enquiryFormFieldsError.messageError
                ? "inline-block"
                : "none",
              color: "red",
            }}
          >
            The maximum allowed characters are 30
          </span>
          <div>
            <label htmlFor="enquiryDept">Select your department: </label>
            <select
              name="enquiryDept"
              id="enquiryDept"
              onChange={onInputChange}
              value={enquiryFormFields.enquiryDept}
            >
              <option value="DEFAULT">Select</option>
              <option value="TECH">Technical</option>
              <option value="SALES">Sales</option>
              <option value="OTHERS">Others(Please specify)</option>
            </select>
            <textarea
              onChange={onOtherEnquiryDeptChange}
              name="otherDept"
              id="otherDept"
              placeholder="Enter the department name"
              style={{
                display:
                  enquiryFormFields.enquiryDept === "OTHERS" ? "block" : "none",
              }}
            ></textarea>
          </div>
        </div>
        <input type="submit" name="" id="" /> <br />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    </div>
  );
};
export default EnquiryControlledOptimized;
