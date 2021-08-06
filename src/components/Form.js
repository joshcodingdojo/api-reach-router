const Form = (props) => {
  console.log("props on Form component", props);
  const { handleFirstName, firstNameError, handleSubmitName } = props;
  return (
    <div>
      <form onSubmit={handleSubmitName}>
        <input
          type="text"
          name="firstName"
          onChange={(e) => handleFirstName(e)}
        />
        <button>Add Name</button>
        {firstNameError.length > 0 ? <p>{firstNameError}</p> : null}
      </form>
    </div>
  );
};

export default Form;
