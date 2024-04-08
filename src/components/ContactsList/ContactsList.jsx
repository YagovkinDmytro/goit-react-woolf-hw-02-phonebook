const ContactsList = ({ contactsArr }) => {
  return (
    <ul>
      {contactsArr.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
