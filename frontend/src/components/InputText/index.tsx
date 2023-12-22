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
  inputValue?: (value: string) => void
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
    disabled = false,
    inputValue,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    setValue(newValue);
    if (inputValue && typeof inputValue === 'function') {
      inputValue(newValue);
    }
  };

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
          onChange={handleChange}
          disabled={disabled}
        />
      </span>
      <small id={helpTextId}>
        {helpText}
      </small>
    </div>
  )
}