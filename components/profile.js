const Profile = () => {
  return (
    <>
      <h2>the form section</h2>
      <form>
        <input placeholder="Name" type="text" id="Name" name="Name" />

        <input placeholder="Email" type="email" id="Email" name="Email" />

        <button id="submit" type="submit">
          Send Message
        </button>
      </form>
    </>
  );
};
export default Profile;
