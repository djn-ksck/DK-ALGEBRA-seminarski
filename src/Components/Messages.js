export default function Messages ({messages}) {
  return (
    <>
    <ul>
      {messages.map((m, index) =>
        <li key={index}>{m.text}</li>
      )}
      </ul>
    </>
  )
}