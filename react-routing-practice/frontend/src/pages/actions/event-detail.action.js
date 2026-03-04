import { redirect } from 'react-router-dom';

export default async function action({ params, request }) {
  const eventId = params.eventId;
  console.log('eventId', eventId);

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'Could not delete events.' }),
      {
        status: 500,
      },
    );
  }

  return redirect('/events');
}
