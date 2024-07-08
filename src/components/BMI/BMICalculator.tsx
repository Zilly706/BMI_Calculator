// src/components/BMICalculator.tsx
import React, { useState } from 'react';
import BMIResult from './BMIResult';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (height && weight) {
      const bmiValue = weight / ((height / 100) ** 2);
      setBmi(bmiValue);
    }
  };

  return (
    <div>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi !== null && <BMIResult bmi={bmi} />}
    </div>
  );
};

export default BMICalculator;
