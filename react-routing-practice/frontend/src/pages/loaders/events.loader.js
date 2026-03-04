// export default async function loader() {
//   const response = await fetch('http://localhost:8080/events');
//   if (!response.ok) {
//     // return { isError: true, message: 'Could not fetch the data' };
//     throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
//       status: 500,
//     });
//   } else {
//     return response;
//   }
// }

export default async function loader() {
  return {
    events: loadEvents(),
  };
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
