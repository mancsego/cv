import Input from '@/components/atoms/Input'
import { useTranslations } from '@/hooks/translator'
import { useRef } from 'react'

function Contact() {
  const translate = useTranslations()
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleClick = () => {
    const email = emailRef?.current
    const name = nameRef?.current
    const message = messageRef?.current

    if (email !== null && message !== null) {
      const conactPerson = name?.value ?? 'Somebody'
      window.open(
        `mailto:${email.value}?subject=Message from ${conactPerson}&body=${message.value}`
      )
    }
  }
  return (
    <section id="contact">
      <div className="heading">
        <hr className="divider" />
        <h2>{translate('contact')}</h2>
      </div>
      <div className="flex justify-center">
        <div className="card">
          <div className="pt-3 pb-5 flex items-center">
            <h3>{translate('Get in touch with me')}</h3>
            <svg className="fill-primary h-6 w-6 ml-3">
              <use xlinkHref="#message" />
            </svg>
          </div>
          <div className="flex">
            <Input label="name" ref={nameRef} />
            <Input label="email" type="email" ref={emailRef} />
          </div>
          <div>
            <Input label="message" type="textarea" ref={messageRef} />
          </div>
          <div className="flex justify-end mx-4">
            <button className="btn btn-primary" onClick={handleClick}>
              {translate('send')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
