import { InputProps } from '@/common/types'
import { useTranslations } from '@/hooks/translator'
import { ForwardedRef, forwardRef } from 'react'

const _createIdFromLabel = (id: string) =>
  id.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

const Input = forwardRef(
  (
    { label, id = _createIdFromLabel(label), type = 'text' }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const translate = useTranslations()
    const inputElement =
      type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          cols={50}
          placeholder=" "
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder=" "
          autoComplete="on"
          ref={ref as ForwardedRef<HTMLInputElement>}
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
)
Input.displayName = 'Input'

export default Input
