module.exports = {
  extends: ["stylelint-config-tailwindcss"],
  rules: {
    // Ensure Tailwind at-rules are accepted by stylelint
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["tailwind", "apply", "layer", "variants", "responsive", "screen"]
    }]
  }
};
