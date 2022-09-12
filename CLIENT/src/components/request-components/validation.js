
function validate() {
    const errors = {};
    if (!values.email) {
      errors.email = "Email-Adresse bitte angeben";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email-Adresse ist ungültig";
    }
    if (!values.phone) {
      errors.phone = "Telefonnummer bitte angeben";
    } else if (
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)
    ) {
      errors.phone = "Format ist ungültig";
    }
    if (!values.firstName.trim()) {
      errors.firstName = "Bitte Namen eintragen";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Bitte Namen eintragen";
    }
    setErrors(errors);
 

    return JSON.stringify(errors) === JSON.stringify({})
  }