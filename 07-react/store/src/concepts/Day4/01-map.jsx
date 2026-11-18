// const fruits = ['apple', 'banana', 'mango'];
const fruits = [
  { id: 1, name: 'apple', price: 9.99 },
  { id: 2, name: 'banana', price: 12.99 },
  { id: 3, name: 'mango', price: 199.99 },
];

export default function ArrayRender() {
  const lessthan20 = fruits.filter((f) => f.price < 20);
  const sum5 = fruits.map((f) => ({ ...f, price: f.price + 5 }));
  console.log(sum5);
  // return <p>{fruits}</p>;
  // return (
  //   <ul>
  //     {fruits.map((f) => (
  //       <li key={f.id}>{f.name}</li>
  //     ))}
  //   </ul>

  // );

  return (
    <ul>
      {sum5.map((f) => (
        <li key={f.id}>
          {f.name} - {f.price}
        </li>
      ))}
    </ul>
  );
}
