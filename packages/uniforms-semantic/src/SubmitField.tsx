import React, { HTMLProps, Ref } from 'react';
import classnames from 'classnames';
import { filterDOMProps, useForm } from 'uniforms';

export type SubmitFieldProps = {
  disabled?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  value?: string;
} & HTMLProps<HTMLInputElement>;

export default function SubmitField({
  className,
  disabled,
  inputRef,
  value,
  name,
  ...props
}: SubmitFieldProps) {
  const { error, state } = useForm();

  return (
    <input
      className={classnames('ui', className, 'button')}
      disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
      ref={inputRef}
      type="submit"
      {...(value ? { value } : {})}
      {...filterDOMProps(props)}
    />
  );
}
