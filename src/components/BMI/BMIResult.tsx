// src/components/BMIResult.tsx
import React from 'react';

type BMIResultProps = {
  bmi: number;
};

const BMIResult: React.FC<BMIResultProps> = ({ bmi }) => {
  let bmiCategory = '';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }

  return (
    <div>
      <h2>Your BMI: {bmi.toFixed(2)}</h2>
      <h3>Category: {bmiCategory}</h3>
    </div>
  );
};

export default BMIResult;
