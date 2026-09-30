import { CircleAlert } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "../utils";

const controlClassName =
  "block w-full rounded-card border border-line bg-white px-4 py-3 text-[15px] text-ink transition-[border-color,box-shadow] placeholder:text-muted/70 hover:border-muted/40 focus-visible:border-teal focus-visible:ring-3 focus-visible:ring-teal/20 focus-visible:outline-hidden aria-invalid:border-danger aria-invalid:focus-visible:ring-danger/15";

const errorIdFor = (id: string) => `${id}-error`;

export const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <p
      id={errorIdFor(id)}
      className="mt-1.5 flex items-center gap-1.5 text-caption font-medium text-danger"
    >
      <CircleAlert size={14} aria-hidden="true" className="shrink-0" />
      {message}
    </p>
  ) : null;

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

const FieldShell = ({ id, label, error, children }: FieldShellProps) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
      {label}
    </label>
    {children}
    <FieldError id={id} message={error} />
  </div>
);

type TextFieldProps = Omit<ComponentProps<"input">, "id" | "name" | "className"> & {
  name: string;
  label: string;
  error?: string;
};

export const TextField = ({ name, label, error, ...inputProps }: TextFieldProps) => {
  const id = `field-${name}`;
  return (
    <FieldShell id={id} label={label} error={error}>
      <input
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorIdFor(id) : undefined}
        className={controlClassName}
        {...inputProps}
      />
    </FieldShell>
  );
};

type TextAreaFieldProps = Omit<ComponentProps<"textarea">, "id" | "name" | "className"> & {
  name: string;
  label: string;
  error?: string;
};

export const TextAreaField = ({ name, label, error, ...textareaProps }: TextAreaFieldProps) => {
  const id = `field-${name}`;
  return (
    <FieldShell id={id} label={label} error={error}>
      <textarea
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorIdFor(id) : undefined}
        className={cn(controlClassName, "min-h-36 resize-y")}
        {...textareaProps}
      />
    </FieldShell>
  );
};

type PillRadioGroupProps = {
  name: string;
  legend: string;
  options: string[];
  error?: string;
};

export const PillRadioGroup = ({ name, legend, options, error }: PillRadioGroupProps) => {
  const id = `field-${name}`;
  return (
    <fieldset aria-describedby={error ? errorIdFor(id) : undefined}>
      <legend className="mb-2 text-sm font-semibold text-ink">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className={cn(
              "cursor-pointer rounded-pill border bg-white px-4 py-2 text-sm font-medium transition-colors has-[:checked]:border-teal-dark has-[:checked]:bg-teal-dark has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-teal",
              error
                ? "border-danger/50 text-ink hover:border-danger"
                : "border-line text-muted hover:border-teal hover:text-teal-dark",
            )}
          >
            <input type="radio" name={name} value={option} className="sr-only" />
            {option}
          </label>
        ))}
      </div>
      <FieldError id={id} message={error} />
    </fieldset>
  );
};
