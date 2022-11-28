export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
  };

  // save user in mongodb and get token

  fetch(`${process.env.REACT_APP_URL}/user`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      localStorage.setItem("sbswap-token", data.token);
    });
};
