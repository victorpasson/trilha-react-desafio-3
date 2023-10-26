import { Controller } from "react-hook-form"

// styles
import { InputContainer, IconContainer, InputText, ErrorText } from './styles'

export default function Input({ leftIcon, name, control, errorMessage, ...rest }) {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller  
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field}{...rest} />} 
          />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}
