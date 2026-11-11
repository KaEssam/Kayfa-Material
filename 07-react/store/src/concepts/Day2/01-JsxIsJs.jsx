import { createElement } from 'react';

const withJsx = <h1>Hello from Jsx</h1>;
const withoutJsx = createElement('h1', { className: 'title' }, 'hello from js');

const card = <p id="card">am a card</p>;
console.log(card);
console.log(card.type);
console.log(card.props);
console.log(card.key);

function JsxIsJs() {
  // return (
  //   <div>
  //     {withJsx}
  //     {withoutJsx}
  //   </div>
  // );

  // return (
  //   <div>
  //     <h1>Title</h1>
  //     <p>
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
  //       doloribus pariatur alias blanditiis, obcaecati veniam fugiat itaque modi
  //       rem, ducimus aspernatur, minima doloremque deserunt magnam asperiores
  //       natus. Nam, sit suscipit?
  //     </p>
  //   </div>
  // );


  //fragment
  return (
    <>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        doloribus pariatur alias blanditiis, obcaecati veniam fugiat itaque modi
        rem, ducimus aspernatur, minima doloremque deserunt magnam asperiores
        natus. Nam, sit suscipit?
      </p>
    </>
  );
}

export default JsxIsJs;
