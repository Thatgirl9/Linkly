import { useState } from "react";

// Properties that the toggleSwitch component can receive
interface ToggleSwitchProps {
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  // Function to Handle the toggle action
  const handleToggle = () => {
    // Update the component state and toggle the checked state.
    setChecked(!checked);
    // Call the onChange callback with the updated checked state
    onChange(!checked);
  };
  return (
    <div className="flex items-center space-x-2">
      {/* Label and Input elements for the switch */}
      <label></label>
    </div>
  );
};

export default ToggleSwitch;
