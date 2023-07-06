export class ValidateInput {
  email(value: string | null) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if (value) {
      return emailRegex.test(value)
    }
    return false
  }


  textlength = (value: string | null, length: number) => {
    if (value) {
      return value.length > length
    }
    return false
  };

  link = (value: string) => {
    /* const regex = /^(https?:\/\/)?([^\s/$.?#].[^\s]*)+\.[^\s]{2,}(\/[^\s]*)*$/;
    return regex.test(value) */
    return true
  };

  handleInputChange = (
    value: String,
    setValue: Function,
    setInvalid: Function,
    validateFunction: Function,
    validateParams: Array<string | number>,
    error?: boolean
  ) => {
    setValue(value);
    if (error) {
      setInvalid(!validateFunction([...validateParams]));
    }
  };
}