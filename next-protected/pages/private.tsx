function Private() {
  return (
    <>
      <h1>This is a private page</h1>
      <p>It's only for the chosen ones.</p>
      <p>Clandenstine stuff... bla bla bla bla... very secretive</p>
    </>
  );
}

Private.requireAuth = true;

export default Private;
