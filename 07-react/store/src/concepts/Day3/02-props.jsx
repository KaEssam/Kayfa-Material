function SayHi(props) {
  console.log(props);
  // props.name = 'test 23';
  return <h3>Hi, {props.name}</h3>;
}

function SayHola({ name = 'test' }) {
  console.log(name);
  return <h3>{name}</h3>;
}

function Profile({ name, age, isStudent, skills, address }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age:{age}</p>
      <p>Studnet:{isStudent ? 'yes' : 'no'}</p>
      <p>Skills: {skills.join(', ')}</p>
      <p>City:{address.city}</p>
    </div>
  );
}

const colors = {
  green: 'bg-green-400 text-green-700',
  blue: 'bg-blue-400 text-blue-900',
};
function Tag({ color }) {
  return <span className={`px-3 py-1 ${colors[color]}`}>{color}</span>;
}

export default function Hello() {
  return (
    <>
      <SayHi name="ranam" age="20" />
      <SayHola name="Ahmed" />
      <SayHola />

      <Profile
        name="ranam"
        age={20}
        isStudent={true}
        skills={['html', 'css', 'js']}
        address={{ city: 'syria' }}
      />

      <div className="flex gap-2 p-6">
        <Tag color="green" />
        <Tag color="blue" />
      </div>
    </>
  );
}
