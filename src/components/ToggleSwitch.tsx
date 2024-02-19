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
      <label className="cursor-pointer">
        {/* Hidden checkbox input that is controlled by the component's state */}
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleToggle}
        />
        {/* Styled div to represent the visual switch */}
        <div className="w-12 h-6 bg-primaryGrey rounded-full p-1 transition duration-300 ease-in-out border border-stroke">
          {/* White circle representing the handle of the switch */}
          <div
            className={` w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              checked
                ? "translate-x-6 bg-primaryBlue "
                : "translate-x-0 bg-slate-300"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
