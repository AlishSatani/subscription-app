import { Field, FieldProps, getIn } from "formik";
import React from "react";
import Input from "../input/Input";

const ErrorMessage = ({ name }: { name: string }) => (
  <Field name={name}>
    {({ form }: FieldProps) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);

      return touch && error ? (
        <div className="text-red text-xs">{error}</div>
      ) : null;
    }}
  </Field>
);

export interface FormFieldProps {
  name: string;
  multiline?: boolean;
  type?: string;
  classes?: {
    body?: string;
    input?: string;
  };
  isVerticalLayout?: boolean;
  label?: string;
  children?: Function | React.ReactNode;
  isDisabled?: boolean;
  inputLabel?: string;
  handleChange?: (value?: any) => void;
}

const FormFieldLayout: React.FC<FormFieldProps> = ({
  name,
  label,
  children,
  classes,
  type = "text",
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field, form, meta }: FieldProps) => {
        const handleChange = async (e: any) => {
          field.onChange(e);
          return props.handleChange && props.handleChange(e);
        };

        return (
          <div className="flex flex-col gap-1">
            {!!children && typeof children === "function" ? (
              children({ field, form, meta })
            ) : (
              <Input
                {...field}
                name={name}
                label={label}
                type={type}
                onChange={handleChange}
                error={!!meta?.error && meta.touched}
              />
            )}
            {meta.error && meta.touched && <ErrorMessage name={name} />}
          </div>
        );
      }}
    </Field>
  );
};

export default FormFieldLayout;
