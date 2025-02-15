export default function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    console.log(email, name, text);
    res.status(201).json({ email: email });
  }
  res.status(200).json({ message: "this is a Success!" });
}
