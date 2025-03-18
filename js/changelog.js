document.addEventListener("DOMContentLoaded", function () {
    fetch("API/changelog.txt")
        .then(response => response.text())
        .then(data => {
            const accordion = document.getElementById("changelogAccordion");
            accordion.innerHTML = "";

            const changelogEntries = data.split("\n\n");
            let changelogHTML = "";

            changelogEntries.forEach((entry, index) => {
                const lines = entry.split("\n");
                const version = lines[0].trim();
                const changes = lines
                    .slice(1)
                    .map(line => `<li>${line.trim()}</li>`)
                    .join("");

                const collapseID = `changelog-${index}`;

                changelogHTML += `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#${collapseID}"
                            aria-expanded="false"
                        >
                            ${version}
                        </button>
                    </h2>
                    <div id="${collapseID}" class="accordion-collapse collapse" data-bs-parent="#changelogAccordion">
                        <div class="accordion-body">
                            <ul>${changes}</ul>
                        </div>
                    </div>
                </div>
                `;
            });

            accordion.innerHTML = changelogHTML;
        })
        .catch(error => console.error("Error fetching changelog:", error));
});
