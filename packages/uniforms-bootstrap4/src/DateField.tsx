import classnames from 'classnames';
import React, { Ref } from 'react';
import { connectField, HTMLFieldProps } from 'uniforms';

import wrapField from './wrapField';

/* istanbul ignore next */
const DateConstructor = (typeof global === 'object' ? global : window).Date;
const dateFormat = (value?: Date) => value?.toISOString().slice(0, -8);

export type DateFieldProps = HTMLFieldProps<
  Date,
  HTMLDivElement,
  {
    inputClassName?: string;
    inputRef?: Ref<HTMLInputElement>;
    max?: Date;
    min?: Date;
    wrapClassName?: string;
    type?: 'date' | 'datetime-local';
  }
>;

function Date({
  disabled,
  error,
  id,
  inputClassName,
  inputRef,
  max,
  min,
  name,
  onChange,
  placeholder,
  readOnly,
  value,
  type,
  ...props
}: DateFieldProps) {
  const dateType = type === 'date' ? type : 'datetime-local';

  return wrapField(
    { ...props, id },
    <input
      className={classnames(inputClassName, 'form-control', {
        'is-invalid': error,
        'is-valid': !error && props.changed,
      })}
      disabled={disabled}
      id={id}
      max={dateFormat(max)}
      min={dateFormat(min)}
      name={name}
      onChange={event => {
        const date = new DateConstructor(event.target.valueAsNumber);
        if (date.getFullYear() < 10000) {
          onChange(date);
        } else if (isNaN(event.target.valueAsNumber)) {
          onChange(undefined);
        }
      }}
      placeholder={placeholder}
      readOnly={readOnly}
      ref={inputRef}
      type={dateType}
      value={dateFormat(value) ?? ''}
    />,
  );
}

export default connectField<DateFieldProps>(Date, { kind: 'leaf' });
