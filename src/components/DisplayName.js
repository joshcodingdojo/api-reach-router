const DisplayName = (props) => {
  const { firstNameArray } = props;
  return (
    <>
      {firstNameArray.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </>
  );
};

export default DisplayName;
