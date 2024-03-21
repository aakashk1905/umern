const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const EVENT_ID = process.env.REACT_APP_EVENT_ID;
const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;

const refreshTokenUrl = `https://oauth2.googleapis.com/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`;

const getToken = async () => {
  const response = await fetch(refreshTokenUrl, { method: "POST" });
  const { access_token } = await response.json();
  return access_token;
};

const getEvent = async () => {
  const accessToken = await getToken();

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${EVENT_ID}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    }
  );
  return response.json();
};

export const updateEvent = async (email) => {
    console.log("email", email);
  const accessToken = await getToken();
  //   console.log("accessToken", accessToken)
  const event = await getEvent();
  //   console.log('event', event)
  const { attendees } = event;
  const attendee = { email };

  attendees.push(attendee);
  var response = {};
  try {
    response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${EVENT_ID}?sendUpdates=all`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          attendees,
        }),
      }
    );
  } catch (e) {
    console.log("e", e);
  }
  //   console.log("response", response);
  return response.ok;
};
