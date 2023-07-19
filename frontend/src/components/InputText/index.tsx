'use client'
import * as Component from "primereact/inputtext";
import { useState } from "react";

interface InputTextProps {
  className?: string;
  id?: string;
  label?: string;
  helpText?: string;
  helpTextId?: string;
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  size?: 'small' | 'normal' | 'large'
  disabled?: boolean
}

export default function InputText(props: InputTextProps) {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);

  const {
    className = '',
    id = '',
    label,
    helpText,
    helpTextId,
    icon,
    iconPosition = 'left',
    size = 'normal',
    disabled = false
  } = props;

  const getSize = () => {
    if (size === 'small') {
      return 'p-inputtext-sm'
    } else if (size === 'large') {
      return 'p-inputtext-lg'
    } else {
      return ''
    }
  }

  const isValid = () => {
    if (valid) {
      return ''
    }
    return 'p-invalid'
  }

  return (
    <div className="flex flex-column gap-1">
      <label htmlFor={id}>{label}</label>
      <span className={icon ? `p-input-icon-${iconPosition}` : ''}>
        {icon}
        <Component.InputText
          id={id}
          className={`${className} ${getSize()} ${isValid()}`}
          aria-describedby={helpTextId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
      </span>
      <small id={helpTextId}>
        {helpText}
      </small>
    </div>
  )
}