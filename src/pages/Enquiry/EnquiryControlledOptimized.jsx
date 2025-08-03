import { useState } from "react";

const EnquiryControlledOptimized = () => {
  // const [name, setName] = useState("");
  // const [mobNo, setMobNo] = useState("");
  // const [message, setMessage] = useState("");

  // const [nameError, setNameError] = useState(false);
  // const [mobNoError, setMobNoError] = useState(false);
  // const [messageError, setMessageError] = useState(false);

  const [enquiryFormFields, setEnquiryFormFields] = useState({
    name: "",
    mobNo: "",
    message: "",
  });
  const [enquiryFormFieldsError, setEnquiryFormFieldsError] = useState({
    nameError: false,
    mobNoError: false,
    messageError: false,
  });

  const onNameChange = (e) => {
    console.log("Name change:", e.target.value);
    //max length 12 char
    if (e.target.value.length <= 12) {
      setEnquiryFormFields((prevState) => ({
        ...prevState,
        name: e.target.value,
      }));
      setEnquiryFormFieldsError({ nameError: false });
    } else {
      //store the error here
      setEnquiryFormFieldsError({ nameError: true });
    }
  };
  const onMobNoChange = (e) => {
    console.log("Mobile change:", e.target.value);
    if (e.target.value.length <= 10) {
      setEnquiryFormFields({ mobNo: e.target.value });
      setEnquiryFormFieldsError({ mobNoError: false });
    } else {
      setEnquiryFormFieldsError({ mobNoError: true });
    }
  };
  const onMessageChange = (e) => {
    console.log("Message change:", e.target.value);
    if (e.target.value.length <= 30) {
      setEnquiryFormFields({ message: e.target.value });
      setEnquiryFormFieldsError({ messageError: false });
    } else {
      setEnquiryFormFieldsError({ messageError: true });
    }
  };

  return (
    <div>
      <hr />
      <h3>Controlled Enquiry Form - Optimized</h3>
      <form onSubmit={() => {}}>
        <div>
          <label htmlFor="name">Enter your Name : </label>
          <input
            onChange={onNameChange}
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
            onChange={onMobNoChange}
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
            onChange={onMessageChange}
            name="Message"
            id="message"
            value={enquiryFormFields.message}
          ></textarea>{" "}
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
        </div>
        <input type="submit" name="" id="" /> <br />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    </div>
  );
};
export default EnquiryControlledOptimized;
