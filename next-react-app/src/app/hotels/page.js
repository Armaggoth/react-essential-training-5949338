async function getData(){
  const result = await fetch(
    "https://snowtooth-hotel-api.fly.dev"
  );
  return result.json();
}
function HotelBlock({name, capacity}){
  return (
    <div>
      <h2>Name {name}</h2>
      <h2>Capacity {capacity}</h2>
    </div>
  )
}

export default async function Page(){
  const data = await getData();
  return(
    <main>
      <div>
        <h1>Hotels</h1>
        <div>{JSON.stringify(data)}</div>
        <div>
          {
            data.map((hotel) => (
              <HotelBlock key={hotel.id} name={hotel.name} capacity={hotel.capacity}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}