export async function sendConfirmationEmail(payload: {
  email: string;
  response: string;
}) {
  const requestUrl = `/api`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON?.stringify(payload),
  };

  const response = await fetch(requestUrl, options);
  return response;
}
