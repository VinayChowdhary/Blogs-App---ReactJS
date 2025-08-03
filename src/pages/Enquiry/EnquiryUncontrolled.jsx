const EnquiryUncontrolled = () => {
  return (
    <div>
        <hr />
      <h3>Enquiry Form - Refs</h3>
      <form>
        <div>
          <label htmlFor="name">Enter your Name : </label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mobNo">Enter your Mobile number : </label>
          <input name="mobNo" id="mobNo" type="number" />
        </div>
        <div>
          <label htmlFor="message">Enter your Message : </label>
          <textarea name="Message" id="message"></textarea>
        </div>
        <input type="submit" name="" id="" /> <br />
        {/* <button type="submit">Submit Button</button> */}
      </form>
    </div>
  );
};
export default EnquiryUncontrolled;
