document.addEventListener("DOMContentLoaded", function () {
    fetch("../API/team.json")
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById("teamContainer");
            teamContainer.innerHTML = "";

            data.forEach(member => {
                const teamMember = document.createElement("div");
                teamMember.classList.add("col-lg-6", "mt-4");
                teamMember.innerHTML = `
                    <div class="team-member d-flex align-items-start">
                        <div class="team-pic">
                            <img src="${member.image}" class="img-fluid" alt="${member.name}" />
                        </div>
                        <div class="team-member-info">
                            <h4>${member.name}</h4>
                            <span>${member.role}</span>
                            <p>${member.bio}</p>
                            <div class="team-social">
                                <a href="${member.telegram}"><i class="fa-brands fa-telegram"></i></a>
                                <a href="${member.github}"><i class="fa-brands fa-github"></i></a>
                                <a href="${member.email}"><i class="fa-solid fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                `;
                teamContainer.appendChild(teamMember);
            });
        })
        .catch(error => console.error("Error fetching team data:", error));
});
