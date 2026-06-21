document.addEventListener('DOMContentLoaded', function() {

  // --- 1. animate progress bars on load (simple reveal) ---
  const progressFills = document.querySelectorAll('.progress-fill');
  progressFills.forEach((fill, index) => {
    let targetWidth = parseFloat(fill.style.width) || 0;
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width = targetWidth + '%';
    }, 150 + index * 120);
  });

  // --- 2. "Update schedule" button interaction ---
  const updateBtn = document.getElementById('updateScheduleBtn');
  if (updateBtn) {
    updateBtn.addEventListener('click', function(e) {
      const scheduleRows = document.querySelectorAll('.schedule-row');
      if (scheduleRows.length >= 4) {
        const lastRow = scheduleRows[3];
        if (lastRow) {
          const strongEl = lastRow.querySelector('strong');
          if (strongEl) {
            const times = ['in 1h', 'in 3h', 'in 45min', 'now'];
            const randomTime = times[Math.floor(Math.random() * times.length)];
            strongEl.textContent = randomTime;
          }
        }
        const firstRow = scheduleRows[0];
        if (firstRow) {
          const strongEl = firstRow.querySelector('strong');
          if (strongEl) {
            const options = ['off‑peak 01:30', 'off‑peak 03:00', 'balanced 02:00'];
            strongEl.textContent = options[Math.floor(Math.random() * options.length)];
          }
        }
        updateBtn.textContent = '✓ updated · AI adjusted';
        setTimeout(() => {
          updateBtn.textContent = '↻ update schedule · AI driven';
        }, 2000);
      }
    });
  }

  // --- 3. Sidebar navigation: highlight active and simulate page switch ---
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    
      // remove active from all
      sidebarLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Optional: show a small feedback in the console or update the header
      const linkText = this.textContent.trim();
      const headerTitle = document.querySelector('.track-header h1');
      if (headerTitle && linkText.includes('Electricity')) {
        // just a demo: we can keep the dashboard as is
        console.log('⚡ Navigating to Electricity view');
      } else if (headerTitle && linkText.includes('Water')) {
        console.log('💧 Navigating to Water view');
      } else if (headerTitle && linkText.includes('Manpower')) {
        console.log('👷 Navigating to Manpower view');
      } else if (linkText.includes('Dashboard')) {
        console.log('🏠 Dashboard');
      }
    });
  });

  // --- 4. simulate "live" updates: every 12 seconds, tweak water progress slightly ---
  setInterval(() => {
    const waterFill = document.querySelector('.card[data-resource="water"] .progress-fill');
    if (waterFill) {
      let current = parseFloat(waterFill.style.width) || 42;
      let delta = (Math.random() * 6) - 3;
      let newVal = Math.min(50, Math.max(35, current + delta));
      waterFill.style.width = newVal + '%';
    }
  }, 12000);

  console.log('✅ Doubledot dashboard · interactive with sidebar');
});
// --- Sidebar navigation: active highlight ONLY (no blocking links) ---
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function () {
    // remove active from all links
    sidebarLinks.forEach(l => l.classList.remove('active'));

    // add active to clicked link
    this.classList.add('active');
  });
});

// --- Auto highlight based on current page ---
const currentPage = window.location.pathname.split('/').pop();

sidebarLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
