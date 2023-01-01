import { InputProps } from '../../common/types'
import './Input.css'

const Input = ({
  label,
  onChange,
  id = _createIdFromLabel(label),
  type = 'text',
}: InputProps): JSX.Element => {
  return (
    <div className="grow relative my-4 mx-1 md:mx-4">
      {type === 'textarea' ? (
        <textarea
          name={id}
          id={id}
          rows={4}
          cols={50}
          placeholder=" "
          onChange={({ target: { value } }) => onChange(value)}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          placeholder=" "
          onChange={({ target: { value } }) => onChange(value)}
        />
      )}
      <label htmlFor={id} className="absolute">
        {label}
      </label>
    </div>
  )
}

const _createIdFromLabel = (id: string): string => {
  return id.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

export default Input
