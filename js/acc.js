document.addEventListener("DOMContentLoaded", function () {
    fetch("../API/devices.json")
        .then(response => response.json())
        .then(devices => {
            const accordion = document.getElementById("deviceAccordion");
            accordion.innerHTML = "";

            devices.forEach(device => {
                const deviceHTML = `
            <div class="accordion-item device-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#${device.id}"
                  aria-expanded="false"
                >
                  ${device.name} (${device.code})
                </button>
              </h2>
              <div
                id="${device.id}"
                class="accordion-collapse collapse"
                data-bs-parent="#deviceAccordion"
              >
                <div class="accordion-body d-flex align-items-center">
                  <img
                    src="${device.image}"
                    alt="${device.name}"
                    class="img-fluid rounded"
                    style="width: 120px"
                  />
                  <div class="ms-3">
                    <p class="mb-2">Maintainer: ${device.maintainer}</p>
                    <div class="d-grid gap-2 w-100">
                      <a href="${device.download}" class="btn custom-btn btn-sm rounded-pill">
                        <i class="fa-solid fa-download"></i> Download
                      </a>
                      <a href="${device.changelog}" class="btn custom-btn btn-sm rounded-pill">
                        <i class="fa-solid fa-file-alt"></i> Changelog
                      </a>
                      <a href="${device.support}" class="btn custom-btn btn-sm rounded-pill">
                        <i class="fa-solid fa-comments"></i> Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;

                accordion.innerHTML += deviceHTML;
            });
        })
        .catch(error => console.error("Error fetching devices:", error));
});

document.getElementById("searchDevice").addEventListener("input", function () {
    let query = this.value.toLowerCase();
    let devices = document.querySelectorAll(".device-item");

    devices.forEach(device => {
        let deviceName = device
            .querySelector(".accordion-button")
            .textContent.toLowerCase();
        device.style.display = deviceName.includes(query) ? "" : "none";
    });
});
