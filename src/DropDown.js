import React, { useState } from "react";

function DropDown(props = defaultProps) {
  const [showCustomOption, setShowCustomOption] = useState(false);

  const placeholder = () => {
    let placeholder = "";

    if (showCustomOption) {
      placeholder = "Type Here...";
    } else if (props.value !== "" && !props.value) {
      placeholder = props.value;
    } else {
      placeholder = props.placeholder ? props.placeholder : "Select";
    }

    return placeholder;
  };

  const handleChange = (e) => {
    let selectedValue = e.target.value;

    if (selectedValue === "-1") {
      setShowCustomOption(true);
      resetValue(e);
    } else if (selectedValue === "0") {
      resetValue(e);
    } else if (selectedValue !== "0" && selectedValue !== "-1") {
      props.onChange(e);
    }
  };

  const resetValue = (e) => {
    e.target.value = "";
    props.onChange(e);
  };

  const discardCustomOption = (e) => {
    resetValue(e);
    setShowCustomOption(false);
  };

  return showCustomOption ? (
    <div style={styles.customOption}>
      <input
        type="text"
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        placeholder={placeholder()}
      />
      <span style={styles.discardCustomOption} onClick={discardCustomOption}>
        X
      </span>
    </div>
  ) : (
    <select
      className={props.className}
      onChange={handleChange}
      value={props.value}
    >
      <option value="0">{placeholder()}</option>
      {props.list.map((item, index) => (
        <option key={index} value={item.value}>
          {item.title}
        </option>
      ))}
      <option value="-1">Other</option>
    </select>
  );
}

const defaultProps = {
  value: "",
  onChange: () => {},
  placeholder: "Select",
  className: "form-control",
  list: new Array({ value: "", title: "", id: "" }),
};

const styles = {
  customOption: {
    display: "flex",
  },
  discardCustomOption: {
    padding: 10,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "small",
  },
};

export default DropDown;
