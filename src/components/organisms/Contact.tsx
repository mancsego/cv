import Input from '../atoms/Input'

const Contact = (): JSX.Element => {
  return (
    <div id="contact">
      <div className="heading">
        <hr className="divider" />
        <h2>contact</h2>
      </div>
      <div className="flex justify-center">
        <div className="card">
          <div className="flex">
            <Input label="name" />
            <Input label="email" type="email" />
          </div>
          <div>
            <Input label="message" type="textarea" />
          </div>
          <div className="flex justify-end mx-4">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
