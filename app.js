/**
 * =========================================================================
 * VESEDA RESOURCE INTELLIGENCE ENGINE - FULL SYSTEM CORE
 * Real-Time Visual Optimization Matrix
 * =========================================================================
 */

// 1. SYSTEM INTERACTIVE DATA BASELINE (Includes high-waste vs. optimized datasets)
const EnterpriseTelemetryStream = {
    executiveSummary: {
        sustainabilityScore: 84,
        scoreStatus: "Optimal Performance (Tier 2 Compliance)"
    },
    energyAnalytics: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        telemetryData: [1420, 1450, 1980, 2210, 1850, 950, 910],          // High peak usage
        optimizedTelemetryData: [1420, 1450, 1600, 1650, 1600, 950, 910], // Shaved peak usage
        currentUsage: 1420,  
        currentCost: 3550,   
        optimizedUsage: 1214, 
        optimizedCost: 3035,  
        prescriptiveInsight: "Reduce machine usage during peak hours to save up to 18% cost."
    },
    hydroAnalytics: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        telemetryData: [1100, 1150, 1120, 1650, 1180, 1110, 1100],          // Spike on Thursday (Leak)
        optimizedTelemetryData: [1100, 1150, 1120, 1200, 1180, 1110, 1100], // Leak resolved
        currentUsage: 1650, 
        currentCost: 825,
        optimizedUsage: 1200, 
        optimizedCost: 600,
        prescriptiveInsight: "Possible leak in Zone B. Inspect sub-surface pneumatic valves to prevent further fluid loss."
    },
    workforceAnalytics: {
        shifts: ["Shift Alpha", "Shift Bravo", "Shift Charlie"],
        currentAllocation: [45, 68, 22],
        optimizedAllocation: [45, 48, 22],
        currentTotalHeadcount: 24,
        currentCost: 5760,
        optimizedTotalHeadcount: 22,
        optimizedCost: 4800,
        prescriptiveInsight: "Reduce 2 staff units during low demand hours to maximize baseline efficiency metrics."
    }
};

// Global handles for managing chart adjustments dynamically
let electricityChartInstance = null;
let waterChartInstance = null;
let manpowerChartInstance = null;

// 2. AUTOMATED DOCUMENT INITIALIZATION (Renders charts on load)
document.addEventListener("DOMContentLoaded", () => {
    const scoreEl = document.getElementById("globalScore");
    if (scoreEl) { scoreEl.innerText = EnterpriseTelemetryStream.executiveSummary.sustainabilityScore; }

    // Render Electricity Line Analysis Graph
    const elecCanvas = document.getElementById('electricityChart');
    if (elecCanvas) {
        electricityChartInstance = new Chart(elecCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: EnterpriseTelemetryStream.energyAnalytics.labels,
                datasets: [{
                    label: 'Electricity Usage (kWh)',
                    data: EnterpriseTelemetryStream.energyAnalytics.telemetryData,
                    borderColor: '#ff9900',
                    backgroundColor: 'rgba(255, 153, 0, 0.1)',
                    borderWidth: 3,
                    tension: 0.3
                }]
            },
            options: { responsive: true }
        });
    }

    // Render Hydro-Resource Line Analysis Graph
    const waterCanvas = document.getElementById('waterChart');
    if (waterCanvas) {
        waterChartInstance = new Chart(waterCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: EnterpriseTelemetryStream.hydroAnalytics.labels,
                datasets: [{
                    label: 'Water Usage (Liters)',
                    data: EnterpriseTelemetryStream.hydroAnalytics.telemetryData,
                    borderColor: '#3399ff',
                    backgroundColor: 'rgba(51, 153, 255, 0.1)',
                    borderWidth: 3,
                    tension: 0.2
                }]
            },
            options: { responsive: true }
        });
    }

    // Render Workforce Distribution Bar Graph
    const manpowerCanvas = document.getElementById('manpowerChart');
    if (manpowerCanvas) {
        manpowerChartInstance = new Chart(manpowerCanvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: EnterpriseTelemetryStream.workforceAnalytics.shifts,
                datasets: [
                    {
                        label: 'Current Headcount',
                        data: EnterpriseTelemetryStream.workforceAnalytics.currentAllocation,
                        backgroundColor: '#ef4444'
                    },
                    {
                        label: 'Optimized Target (AI)',
                        data: EnterpriseTelemetryStream.workforceAnalytics.currentAllocation, 
                        backgroundColor: '#2ecc71'
                    }
                ]
            },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
    }
});

// =========================================================================
// 3. CONTROL ACTION LOGIC - CROSS-PAGE OPERATIONS
// =========================================================================

// --- ⚡ ELECTRICITY CONSOLE INTERACTION ---
function analyze() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");
    
    if (usageEl && costEl && insightEl) {
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentCost;
        insightEl.innerText = EnterpriseTelemetryStream.energyAnalytics.prescriptiveInsight;
        insightEl.style.color = "#333333";
        
        // Reset chart back to high-use unoptimized data if re-run
        if (electricityChartInstance) {
            electricityChartInstance.data.datasets[0].data = EnterpriseTelemetryStream.energyAnalytics.telemetryData;
            electricityChartInstance.update();
        }
    }
}

function apply() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");
    
    if (usageEl && costEl && insightEl) {
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.optimizedUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.optimizedCost;
        insightEl.innerHTML = "<strong>⚡ Electricity optimization applied!</strong> Systems recalibrated successfully.";
        insightEl.style.color = "#27ae60";
        
        // VISUAL CHART UPDATE: Drops the peak values down
        if (electricityChartInstance) {
            electricityChartInstance.data.datasets[0].data = EnterpriseTelemetryStream.energyAnalytics.optimizedTelemetryData;
            electricityChartInstance.update();
        }
    }
}

// --- 💧 WATER CONSOLE INTERACTION ---
function analyzeWater() {
    const waterUsageEl = document.getElementById("waterUsage");
    const waterCostEl = document.getElementById("waterCost");
    const waterInsightEl = document.getElementById("waterInsight");
    
    if (waterUsageEl && waterCostEl && waterInsightEl) {
        waterUsageEl.innerText = EnterpriseTelemetryStream.hydroAnalytics.currentUsage;
        waterCostEl.innerText = EnterpriseTelemetryStream.hydroAnalytics.currentCost;
        waterInsightEl.innerText = EnterpriseTelemetryStream.hydroAnalytics.prescriptiveInsight;
        waterInsightEl.style.color = "#333333";
        
        // Reset chart back to high leak-spiked data if re-run
        if (waterChartInstance) {
            waterChartInstance.data.datasets[0].data = EnterpriseTelemetryStream.hydroAnalytics.telemetryData;
            waterChartInstance.update();
        }
    }
}

function applyWaterOptimization() {
    const waterUsageEl = document.getElementById("waterUsage");
    const waterCostEl = document.getElementById("waterCost");
    const waterInsightEl = document.getElementById("waterInsight");
    
    if (waterUsageEl && waterCostEl && waterInsightEl) {
        waterUsageEl.innerText = EnterpriseTelemetryStream.hydroAnalytics.optimizedUsage;
        waterCostEl.innerText = EnterpriseTelemetryStream.hydroAnalytics.optimizedCost;
        waterInsightEl.innerHTML = "<strong>💧 Water optimization applied!</strong> Localized pipe pressures stabilized.";
        waterInsightEl.style.color = "#27ae60";
        
        // VISUAL CHART UPDATE: flattens the Thursday high spike completely
        if (waterChartInstance) {
            waterChartInstance.data.datasets[0].data = EnterpriseTelemetryStream.hydroAnalytics.optimizedTelemetryData;
            waterChartInstance.update();
        }
    }
}

// --- 👷 MANPOWER CONSOLE INTERACTION ---
function analyzeManpower() {
    const staffEl = document.getElementById("staffAllocation");
    const manpowerCostEl = document.getElementById("manpowerCost");
    const manpowerInsightEl = document.getElementById("manpowerInsight");
    
    if (staffEl && manpowerCostEl && manpowerInsightEl) {
        staffEl.innerText = EnterpriseTelemetryStream.workforceAnalytics.currentTotalHeadcount;
        manpowerCostEl.innerText = EnterpriseTelemetryStream.workforceAnalytics.currentCost;
        manpowerInsightEl.innerText = EnterpriseTelemetryStream.workforceAnalytics.prescriptiveInsight;
        manpowerInsightEl.style.color = "#333333";
        
        if (manpowerChartInstance) {
            manpowerChartInstance.data.datasets[1].data = EnterpriseTelemetryStream.workforceAnalytics.currentAllocation;
            manpowerChartInstance.update();
        }
    }
}

function applyManpowerOptimization() {
    const staffEl = document.getElementById("staffAllocation");
    const manpowerCostEl = document.getElementById("manpowerCost");
    const manpowerInsightEl = document.getElementById("manpowerInsight");
    
    if (staffEl && manpowerCostEl && manpowerInsightEl && manpowerChartInstance) {
        staffEl.innerText = EnterpriseTelemetryStream.workforceAnalytics.optimizedTotalHeadcount;
        manpowerCostEl.innerText = EnterpriseTelemetryStream.workforceAnalytics.optimizedCost;
        manpowerInsightEl.innerHTML = "<strong>👷 Manpower optimization complete!</strong> Excess shifts rebalanced.";
        manpowerInsightEl.style.color = "#27ae60";
        
        // VISUAL CHART UPDATE: Reduces the active target green bar
        manpowerChartInstance.data.datasets[1].data = EnterpriseTelemetryStream.workforceAnalytics.optimizedAllocation;
        manpowerChartInstance.update();
    }
}