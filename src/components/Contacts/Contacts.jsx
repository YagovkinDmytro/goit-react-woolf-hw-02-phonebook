const Contacts = ({ contactsArr }) => {
  console.log(contactsArr);
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

export default Contacts;
