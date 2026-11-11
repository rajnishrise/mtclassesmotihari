(function () {
  const { $, esc } = MT, C = MT_CONFIG;
  const tel = C.phone.replace(/\s/g, "");
  $("#info").innerHTML = `<p>📍 <b>Address</b><br>${esc(C.address)}</p><p>📞 <b>Phone</b><br><a href="tel:${tel}">${esc(C.phone)}</a></p>
    ${C.email ? `<p>✉️ <b>Email</b><br>${esc(C.email)}</p>` : ""}<p>🗓 <b>Days</b><br>${esc(C.hours)}</p>
    <a class="btn wa block" target="_blank" rel="noopener" href="${MT.wa("Hello " + C.name + ", I have a question.")}">💬 Chat on WhatsApp</a>`;
  $("#map").innerHTML = `<iframe title="Map" loading="lazy" style="border:0;width:100%;height:300px;border-radius:12px" src="https://www.google.com/maps?q=${encodeURIComponent(C.mapQuery)}&output=embed"></iframe>
    <a class="btn ghost sm" style="margin-top:10px" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.mapQuery)}">Open in Google Maps</a>`;
  if (C.upiId) { $("#pay-sec").classList.remove("hide");
    $("#pay").innerHTML = `<p>UPI ID: <b>${esc(C.upiId)}</b></p><a class="btn gold" href="upi://pay?pa=${encodeURIComponent(C.upiId)}&pn=${encodeURIComponent(C.name)}&cu=INR">Pay with a UPI app</a><p class="muted" style="margin-top:10px">Opens on a phone with a UPI app. Send the payment screenshot on WhatsApp.</p>`; }
  const want = new URLSearchParams(location.search).get("class"); if (want) $("#f-class").value = want;
  $("#enquiry").onsubmit = (e) => {
    e.preventDefault(); const f = e.target, v = (n) => f.elements[n].value.trim();
    const data = { name: v("name"), cls: v("cls"), subject: v("subject"), phone: v("phone"), school: v("school"), message: v("message") };
    if (!/^[6-9]\d{9}$/.test(data.phone)) { MT.toast("Enter a 10-digit mobile number"); f.elements.phone.focus(); return; }
    if (MT.online()) MT.api({ action: "enquiry", enquiry: data }).catch(() => {});
    const text = `Admission enquiry — ${C.name}\nStudent: ${data.name}\nClass: ${data.cls}\nSubject: ${data.subject}\nPhone: ${data.phone}` + (data.school ? `\nSchool: ${data.school}` : "") + (data.message ? `\nMessage: ${data.message}` : "");
    $("#sent").innerHTML = `<div class="alert ok">Your enquiry is ready. Tap the button to send it on WhatsApp.</div><a class="btn wa block" target="_blank" rel="noopener" href="${MT.wa(text)}">Send on WhatsApp</a>`;
    $("#sent").scrollIntoView({ behavior: "smooth", block: "center" });
  };
})();
