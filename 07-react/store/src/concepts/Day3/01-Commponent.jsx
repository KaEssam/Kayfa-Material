export function Greating() {
  return <h1>Hello form Component</h1>;
}

function greating() {
  return <h1>Hello form Component</h1>;
}

export default function Commponent() {
  return (
    <>
      {/* {Greating()} */}
      <Greating />
      <Greating />
      <Greating />
      <Greating />

      {/* <greating /> */}
    </>
  );
}
