document.addEventListener("DOMContentLoaded", (Event) => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
  <iframe
  class="contact__iframe"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4857.448226398927!2d13.32682818366283!3d52.502233431973266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850ddfaccceff%3A0x49f81f432a023733!2sCharlottenburg!5e0!3m2!1ses!2sde!4v1687963870709!5m2!1ses!2sde"
></iframe>
  `;
  }, 500);
});
