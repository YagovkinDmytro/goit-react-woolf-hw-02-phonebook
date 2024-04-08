const PhonebookForm = ({
  handleSubmit,
  handleChange,
  stateName,
  stateNumber,
}) => {
  return (
    <>
      <div>
        <form onSubmit={evt => handleSubmit(evt)}>
          <div>
            <label htmlFor="name" className="form-lable">
              Name
            </label>
            <input
              value={stateName}
              onChange={evt => handleChange(evt)}
              className="form-imput"
              type="text"
              id="name"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <label htmlFor="number" className="form-lable">
              Number
            </label>
            <input
              value={stateNumber}
              onChange={evt => handleChange(evt)}
              className="form-imput"
              type="tel"
              id="number"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="submit">Add contact</button>
        </form>
      </div>
    </>
  );
};

export default PhonebookForm;
