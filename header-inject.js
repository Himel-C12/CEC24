(function () {
  // run only on profile pages
  if (!document.body.classList.contains("profile-page")) return;

  // avoid double insert
  if (document.querySelector(".ruet-header")) return;

  const headerHTML = `
    <header class="ruet-header">
      <div class="ruet-inner">
        <img class="ruet-logo" src="img/_asset/ruet-logo.png" alt="RUET Logo">
        <div class="ruet-text">
          <div class="ruet-motto">Heaven’s Light is Our Guide</div>
          <div class="ruet-title">Rajshahi University of Engineering &amp; Technology</div>
          <div class="ruet-title-bn">রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়</div>
          <div class="ruet-dept">Department of Civil Engineering 24 Series</div>
        </div>
      </div>
    </header>
  `;

  // Insert before the old header.png banner if it exists, else at top of page
  const oldBanner = document.querySelector(".banner-container.full-curve");
  if (oldBanner) {
    oldBanner.insertAdjacentHTML("beforebegin", headerHTML);
    oldBanner.style.display = "none"; // hide old header.png block
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }
})();
