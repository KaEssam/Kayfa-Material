const user = { firtsName: 'Sara', lastName: 'Ahmed' };

function great(name) {
  return `welcome, ${name}`;
}

function Expressions() {
  const price = 100;
  const dis = 20;
  return (
    <>
      <li>Name: {user.firtsName + ' ' + user.lastName}</li>
      <li>
        Price:{price}, discount: {price - dis}
      </li>
      <li>{great(user.firtsName)}</li>
    </>
  );
}

export default Expressions;
