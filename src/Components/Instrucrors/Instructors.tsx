import React from 'react';

export const Instructors: React.FC = () => {
  const arr = [2, 3, 4];

  const f = arr.find((fin) => fin === 2);

  console.log(f);

  return (
    <>
      <div>
        <h1>Instructors</h1>
      </div>
    </>
  );
};
