document.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.id !== "sponsorship-form") return;

  event.preventDefault();
  const fields = new FormData(form);
  const body = [
    "Hi Domen and Farid,",
    "",
    "I'd like to support Nix TacoSprint in June 2027.",
    "",
    `Name: ${fields.get("name")}`,
    `Email: ${fields.get("email")}`,
    `Company or organization: ${fields.get("company") || "N/A"}`,
    `Sponsorship level: ${fields.get("level")}`,
    "",
    fields.get("message"),
  ].join("\r\n");

  window.location.href =
    "mailto:sponsors@tacosprint.org?subject=" +
    encodeURIComponent("Nix TacoSprint 2027 sponsorship inquiry") +
    "&body=" + encodeURIComponent(body);

  document.getElementById("sponsorship-status").textContent =
    "Your inquiry has not been sent yet. Send the draft from your email app. If no draft opens, email sponsors@tacosprint.org directly.";
});

function showSponsorshipForm() {
  const form = document.getElementById("sponsorship-form");
  if (form) form.hidden = false;
}

// Material's instant navigation also replaces page content without a full load.
if (typeof document$ !== "undefined") {
  document$.subscribe(showSponsorshipForm);
} else {
  showSponsorshipForm();
}
