/**
 * first select all the input tags
 */

const inputs = document.querySelectorAll(".controls input");

/**
 * Add event listener to all the input fields
 * if there is any change, we will update the new value  to the css variables
 */

inputs.forEach((input) =>
  input.addEventListener("change", function () {
    const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
  })
);
