import { ForwardedRef, forwardRef } from 'react'
import { InputProps } from '@/common/types'
import '@/components/atoms/Input.css'
import { useTranslations } from '@/hooks/translator'

const Input = forwardRef(
  (
    { label, id = _createIdFromLabel(label), type = 'text' }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const translate = useTranslations()
    return (
      <div className="grow relative my-4 mx-1 md:mx-4">
        {type === 'textarea' ? (
          <textarea
            name={id}
            id={id}
            rows={4}
            cols={50}
            placeholder=" "
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
          />
        ) : (
          <input
            type={type}
            name={id}
            id={id}
            placeholder=" "
            ref={ref as ForwardedRef<HTMLInputElement>}
          />
        )}
        <label htmlFor={id} className="absolute">
          {translate(label)}
        </label>
      </div>
    )
  }
)
Input.displayName = 'Input'

const _createIdFromLabel = (id: string): string =>
  id.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

export default Input
