const signUpConfig = {
  header: "Sign up",
  hideAllDefaults: true,
  defaultCountryCode: "90",
  signUpFields: [
    {
      label: "Name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
    {
      label: "Phone Number",
      key: "phone_number",
      required: true,
      displayOrder: 3,
      type: "phone_number",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 4,
      type: "string",
    },
  ],
};

export default signUpConfig;