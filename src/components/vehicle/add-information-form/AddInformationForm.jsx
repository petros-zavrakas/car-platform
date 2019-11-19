import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "../../../common/hooks/useForm";
import Select from "../../../common/components/form/Select";
import Button from "react-bootstrap/Button";
import { fetchMake, fetchModel, fetchTrim } from "../VehicleActions";
import { selectVehicleInformation } from "../VehicleSelectors";
import { AddInfoForm } from "./AddInformationForm.styles";

const AddInformationForm = props => {
  const {
    vehicalInformation,
    onSubmit,
    onComponentMount,
    onFetchModel,
    onFetchTrim
  } = props;

  const [fields, setFields, handleChange] = useForm({});
  const [selectOptions, setSelectOptions] = useState({
    make: [],
    model: [],
    trim: [],
    engineType: ["VEE", "INLINE", "BOXER", "ROTARY"]
  });

  useEffect(() => {
    onComponentMount();
  }, []);

  useEffect(() => {
    if (Object.entries(vehicalInformation).length) {
      setSelectOptions({ ...selectOptions, ...vehicalInformation });
    }
  }, [vehicalInformation]);

  const onChange = event => {
    handleChange(event)

    const input = event.currentTarget;
    if (input.id === "make") onFetchModel(input.value);
    if (input.id === "model") onFetchTrim(fields.make, input.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(fields);
    setFields({});
  };

  return (
    <AddInfoForm onSubmit={handleSubmit}>
      <h4 className="header">Add Additional Information</h4>
      <Select
        name="make"
        label="Make"
        optionsList={selectOptions.make}
        onChange={onChange}
        value={fields.make || ""}
      />
      <Select
        name="model"
        label="Model"
        optionsList={selectOptions.model}
        onChange={onChange}
        disabled={fields.make ? "" : "disabled"}
        value={fields.model || ""}
      />
      <Select
        name="trim"
        label="Trim"
        optionsList={selectOptions.trim}
        onChange={onChange}
        disabled={fields.make && fields.model ? "" : "disabled"}
        value={fields.trim || ""}
      />
      <Select
        name="engineType"
        label="Engine Type"
        optionsList={selectOptions.engineType}
        onChange={onChange}
        value={fields.engineType || ""}
      />
      <Button variant="primary" type="submit" className="mt-1">
        Add Information
      </Button>
    </AddInfoForm>
  );
};

const mapStateToProps = state => ({
  vehicalInformation: selectVehicleInformation(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onComponentMount: () => {
      dispatch(fetchMake());
    },
    onFetchModel: make => {
      dispatch(fetchModel(make));
    },
    onFetchTrim: (make, model) => {
      dispatch(fetchTrim(make, model));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInformationForm);
