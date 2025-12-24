const SUPABASE_URL = "https://vgtesrlfursfsrrqseqq.supabase.co";
const SUPABASE_KEY = "sb_publishable_Z8q8KEpJNYukcwZlj4KHhg_nIUKV6Ts";

const form = document.getElementById("artikelForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));

  const res = await fetch(`${SUPABASE_URL}/rest/v1/artikel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Artikel gespeichert!");
    form.reset();
  } else {
    alert("Fehler beim Speichern");
  }
});
