import React, { useState } from "react";

export default () => {
  /*
  const [zobrazStranku1, setZobrazStranku1] = useState(true);
  const [zobrazStranku2, setZobrazStranku2] = useState(false);
  const [zobrazStranku3, setZobrazStranku3] = useState(false);

  const handleClickStranka1 = () => {
    setZobrazStranku1(true);
    setZobrazStranku2(false);
    setZobrazStranku3(false);
  };

  const handleClickStranka2 = () => {
    setZobrazStranku1(false);
    setZobrazStranku2(true);
    setZobrazStranku3(false);
  };

  const handleClickStranka3 = () => {
    setZobrazStranku1(false);
    setZobrazStranku2(false);
    setZobrazStranku3(true);
  };
  */

  const [zobrazStranku, setZobrazStranku] = useState(1);
  return (
    <>
      <div>
        <span onClick={() => setZobrazStranku(1)}>Stránka 1</span>
        <span onClick={() => setZobrazStranku(2)}>Stránka 2</span>
        <span onClick={() => setZobrazStranku(3)}>Stránka 3</span>
      </div>
      {zobrazStranku === 1 ? <div>Obsah stránky 1</div> : null}
      {zobrazStranku === 2 ? <div>Obsah stránky 2</div> : null}
      {zobrazStranku === 3 ? <div>Obsah stránky 3</div> : null}
    </>
  );
};
