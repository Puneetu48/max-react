async function loader({ params }) {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (response.status === 304) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: 'Could not fetch details for selected events.',
      }),
      { status: 500 },
    );
  }

  return response;
}

export default loader;
