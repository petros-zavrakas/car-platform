import { useState } from "react";

export const useForm = formFields => {
  const [fields, setFields] = useState(formFields);

  const handleChange = ({ currentTarget: input }) => {
    const updatedField = { [input.id]: input.value || input.innerText };
    setFields({ ...fields, ...updatedField });
  };

  return [fields, fields => setFields(fields), handleChange];
};
