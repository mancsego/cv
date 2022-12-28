import { InputProps } from '../../common/types'
import './Input.css'

const Input = ({
  label,
  id = _createIdFromLabel(label),
  type = 'text',
}: InputProps): JSX.Element => {
  return (
    <div className="grow relative my-4 mx-1 md:mx-4">
      {type === 'textarea' ? (
        <textarea name={id} id={id} rows={4} cols={50} placeholder=" " />
      ) : (
        <input type={type} name={id} id={id} placeholder=" " />
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
