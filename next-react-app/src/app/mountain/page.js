async function getData(){
  const result = await fetch("https://snowtooth-api-rest.fly.dev");
  return result.json();
}
export default async function Page(){
  const data = await getData();
  return(
    <>
      <h1>Yhis is a mountain</h1>
      <table>
        <thead>
          <tr>
            <th>Lift Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}