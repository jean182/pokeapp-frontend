import React from "react";

export interface UseControlledProps<T = unknown> {
    /**
     * Holds the component value when it's controlled.
     */
    controlled: T | undefined;
    /**
     * The default value when uncontrolled.
     */
    default: T | undefined;
    /**
     * The component name displayed in warnings.
     */
    name: string;
    /**
     * The name of the state variable displayed in warnings.
     */
    state?: string;
  }

export function useControlled({ controlled, default: defaultProp, name }: UseControlledProps) {
    const { current: isControlled } = React.useRef(controlled !== undefined);
    const [valueState, setValue] = React.useState(defaultProp);
    const value = isControlled ? controlled : valueState;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useEffect(() => {
        if (isControlled !== (controlled !== undefined)) {
          console.error(
            [
              `A component is changing ${
                isControlled ? "a " : "an un"
              }controlled ${name} to be ${isControlled ? "un" : ""}controlled.`,
              "Elements should not switch from uncontrolled to controlled (or vice versa).",
              `Decide between using a controlled or uncontrolled ${name} ` +
                "element for the lifetime of the component.",
              "More info: https://fb.me/react-controlled-components"
            ].join("\n")
          );
        }
      }, [controlled]);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { current: defaultValue } = React.useRef(defaultProp);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useEffect(() => {
        if (defaultValue !== defaultProp) {
          console.error(
            [
              `A component is changing the default value of an uncontrolled ${name} after being initialized. ` +
                `To suppress this warning opt to use a controlled ${name}.`
            ].join("\n")
          );
        }
      }, [JSON.stringify(defaultProp)]);
    }
  
    const setValueIfUncontrolled = React.useCallback(newValue => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
  
    return [value, setValueIfUncontrolled];
}
