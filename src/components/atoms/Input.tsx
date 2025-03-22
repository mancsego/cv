import { useTranslations } from '@/hooks/translator'
import { Ref } from 'react'

const _createIdFromLabel = (id: string) =>
  id.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

function Input({
  label,
  ref,
  id = _createIdFromLabel(label),
  type = 'text'
}: {
  ref: Ref<HTMLInputElement | HTMLTextAreaElement | undefined>
  label: string
  id?: string
  type?: string
}) {
  const translate = useTranslations()
  const inputElement =
    type === 'textarea' ? (
      <textarea id={id} rows={4} cols={50} placeholder=" " ref={ref as Ref<HTMLTextAreaElement>} />
    ) : (
      <input
        type={type}
        id={id}
        placeholder=" "
        autoComplete="on"
        ref={ref as Ref<HTMLInputElement>}
      />
    )

  return (
    <div className="grow relative my-4 mx-1 md:mx-4">
      {inputElement}
      <label htmlFor={id} className="absolute">
        {translate(label)}
      </label>
    </div>
  )
}

export default Input
