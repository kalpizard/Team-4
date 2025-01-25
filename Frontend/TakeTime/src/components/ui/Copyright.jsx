const Copyright = () => {
  const currentDate = new Date();

  return (
    <div>
      <div>
        <p>Copyright © {currentDate.getFullYear()}</p>
      </div>
      <div>
        <p>Todos lo derechos reservados</p>
      </div>
    </div>
  );
};

export default Copyright;
