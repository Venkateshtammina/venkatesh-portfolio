export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        Feel free to reach out via email or connect on LinkedIn!
      </p>

      <ul className="text-gray-700 space-y-3">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:venkatesht1243@gmail.com" className="text-blue-600 hover:underline">
            venkatesht1243@gmail.com
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a 
            href="https://github.com/Venkateshtammina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/Venkateshtammina
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a 
            href="https://www.linkedin.com/in/venkatesh-t-310a93297" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/venkatesh-t-310a93297
          </a>
        </li>
      </ul>
    </section>
  );
}
