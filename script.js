function toggleJobQuestions() {
    var position = document.getElementById("jobPosition").value;
    var domesticSection = document.getElementById("domesticSection");
    var adminSection = document.getElementById("adminSection");

    var domesticJobs = [
        "Live-in House Help",
        "Live-out House Help",
        "Live-in Nanny",
        "Live-out Nanny",
        "Cleaner"
    ];

    var adminJobs = [
        "Administrative Assistant",
        "Receptionist/Front Desk Officer",
        "Customer Service Representative",
        "Office Assistant",
        "Personal Assistant/Secretary",
        "HR Assistant",
        "Accounts Assistant",
        "Procurement Officer"
    ];

    if (domesticJobs.includes(position)) {
        domesticSection.style.display = "block";
        adminSection.style.display = "none";
    } else if (adminJobs.includes(position)) {
        adminSection.style.display = "block";
        domesticSection.style.display = "none";
    } else if (position === "Other") {
        domesticSection.style.display = "block";
        adminSection.style.display = "block";
    } else {
        domesticSection.style.display = "none";
        adminSection.style.display = "none";
    }
}
