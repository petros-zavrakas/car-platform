import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import Select from "../../../components/form/Select";
import Button from "react-bootstrap/Button";
import { fetchMake, fetchModel, fetchTrim } from "../redux/VehicleActions";
import { selectVehicleInformation } from "../redux/VehicleSelectors";
import { AddInfoForm } from "./AddInformationForm.styles";

const AddInformationForm = props => {
  const {
    vehicalInformation,
    onSubmit,
    onComponentMount,
    onFetchModel,
    onFetchTrim
  } = props;

  const [handleChange, fields, setFields] = useForm({});
  const engineTypeOptions = ["VEE", "INLINE", "BOXER", "ROTARY"];

  useEffect(() => {
    onComponentMount();
  }, [onComponentMount]);

  const onChange = event => {
    handleChange(event);

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
        optionsList={vehicalInformation.make || []}
        onChange={onChange}
        value={fields.make || ""}
      />
      <Select
        name="model"
        label="Model"
        optionsList={vehicalInformation.model || []}
        onChange={onChange}
        disabled={fields.make ? "" : "disabled"}
        value={fields.model || ""}
      />
      <Select
        name="trim"
        label="Trim"
        optionsList={vehicalInformation.trim || []}
        onChange={onChange}
        disabled={fields.make && fields.model ? "" : "disabled"}
        value={fields.trim || ""}
      />
      <Select
        name="engineType"
        label="Engine Type"
        optionsList={engineTypeOptions}
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
