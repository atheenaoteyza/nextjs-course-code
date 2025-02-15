export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const newUser = {
      id: new Date().toISOString(),
      email: email,
    };
    console.log(newUser);
    res.status(201).json({ message: "Succes!" });
  }
}
