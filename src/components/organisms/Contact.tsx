import { useState } from 'react'
import Input from '../atoms/Input'

const Contact = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = () => {
    window.open(`mailto:${email}?subject=Message from ${name}&body=${message}`)
  }
  return (
    <div id="contact">
      <div className="heading">
        <hr className="divider" />
        <h2>contact</h2>
      </div>
      <div className="flex justify-center">
        <div className="card">
          <div className="pt-3 pb-5 flex items-center">
            <h3>Get in touch with me</h3>
            <svg className="fill-primary h-6 w-6 ml-3">
              <use xlinkHref="#message" />
            </svg>
          </div>
          <div className="flex">
            <Input label="name" onChange={setName} />
            <Input label="email" type="email" onChange={setEmail} />
          </div>
          <div>
            <Input label="message" type="textarea" onChange={setMessage} />
          </div>
          <div className="flex justify-end mx-4">
            <button className="btn btn-primary" onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
