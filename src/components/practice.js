
function WhoAmI({ name, surname, email }) {
  return (
    <>
      <h1>My name is {name}, surname - {surname}</h1>
      My email: <a href="/">{email}</a>
    </>
  )
}

export default WhoAmI;