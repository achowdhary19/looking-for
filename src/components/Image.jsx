
//removing the object person frm here and leaving the object where we call it doesnt throw any errors but it doesnt do anything and doesnt tell you why nothing is happening, i think thats why typescript is helpful

export default function Image({className, source, person}) {
  return (
    <> 
        <img
        className = {className}
        src={source}
        alt={person.name}
        >
        </img>
    </>
  )
}
