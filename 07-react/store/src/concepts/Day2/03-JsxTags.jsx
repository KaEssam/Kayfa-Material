import '../../App.css';

export default function JsxTags() {
  const styleP = {
    backgroundColor: 'blue',
    color: 'black',
    fontSize: 20,
  };
  return (
    //class => className
    //for => htmlFor
    //

    <div className="form">
      <label htmlFor="name">name</label>
      <input type="text" maxLength={40} />

      <p style={{ backgroundColor: 'blue', color: 'black', fontSize: 20 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error
        earum eos tenetur, sint ullam voluptate deserunt consequatur saepe porro
        vitae? Architecto voluptate nulla ipsum pariatur. Voluptates quis
        reprehenderit dolorem.
      </p>

      <p style={styleP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error
        earum eos tenetur, sint ullam voluptate deserunt consequatur saepe porro
        vitae? Architecto voluptate nulla ipsum pariatur. Voluptates quis
        reprehenderit dolorem.
      </p>
    </div>
  );
}
