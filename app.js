/**
 * =========================================================================
 * VESEDA RESOURCE INTELLIGENCE ENGINE - FULL SYSTEM CORE
 * =========================================================================
 */

// 1. SYSTEM INTERACTIVE DATA BASELINE
const EnterpriseTelemetryStream = {
    executiveSummary: {
        sustainabilityScore: 84,
        scoreStatus: "Optimal Performance (Tier 2 Compliance)"
    },
    energyAnalytics: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        telemetryData: [1420, 1450, 1980, 2210, 1850, 950, 910],
        currentUsage: 1420,  
        currentCost: 3550,   
        optimizedUsage: 1214, 
        optimizedCost: 3035,  
        prescriptiveInsight: `<strong>[OPTIMIZATION WINDOW] Peak Demand Thermal Alignment:</strong><br>
                              Energy consumption profiles are ready for automated scheduling adjustments.<br>
                              <strong>Actionable Resolution:</strong> Deploy automated peak-shaving protocols via main breaker grids.<br>
                              <strong>Financial Impact:</strong> Projected Cost Reduction of 14.5%.`
    },
    hydroAnalytics: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        telemetryData: [4200, 4150, 4300, 8900, 4400, 4120, 4100],
        currentUsage: 8900, 
        prescriptiveInsight: `<strong>[HYDRO LOGIC ACTIVATED] Flow Variance Analysis:</strong><br>
                              System monitoring confirms volumetric adjustments can be safely managed in Zone 4.<br>
                              <strong>Actionable Resolution:</strong> Calibrate pneumatic pressure sub-valves.`
    },
    workforceAnalytics: {
        shifts: ["Shift Alpha (Morning)", "Shift Bravo (Afternoon)", "Shift Charlie (Evening)"],
        currentAllocation: [45, 68, 22],
        optimizedAllocation: [45, 48, 22],
        prescriptiveInsight: `<strong>[HUMAN CAPITAL SURPLUS] Capacity Index Allocation Anomaly:</strong><br>
                              Shift Bravo (Afternoon) indicates a 29% capacity over-allocation relative to operational throughput.<br>
                              <strong>Actionable Resolution:</strong> Transition 20 auxiliary crew units to secondary infrastructure queues.`
    }
};

// Global handles for managing reactive adjustments
let electricityChartInstance = null;
let manpowerChartInstance = null;

// 2. AUTOMATED DOCUMENT INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // Sync global score indicators
    const scoreEl = document.getElementById("globalScore");
    if (scoreEl) { scoreEl.innerText = EnterpriseTelemetryStream.executiveSummary.sustainabilityScore; }

    // Render Electricity Line Analysis
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

    // Render Hydro-Resource Line Analysis
    const waterCanvas = document.getElementById('waterChart');
    if (waterCanvas) {
        new Chart(waterCanvas.getContext('2d'), {
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

    // Render Workforce Distribution Bar Chart
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
                        data: EnterpriseTelemetryStream.workforceAnalytics.currentAllocation, // Starts matching, adjusts on apply
                        backgroundColor: '#2ecc71'
                    }
                ]
            },
            options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
    }
});

// =========================================================================
// 3. PAGE CONTROL ENGINE INTERACTION MANAGEMENT
// =========================================================================

// Electricity Execution
function analyze() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");
    if (usageEl && costEl && insightEl) {
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentCost;
        insightEl.innerHTML = EnterpriseTelemetryStream.energyAnalytics.prescriptiveInsight;
        insightEl.style.color = "#2ecc71"; 
    }
}
function apply() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");
    if (usageEl && costEl && insightEl) {
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.optimizedUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.optimizedCost;
        insightEl.innerHTML = `<strong>⚡ Optimization Protocols Implemented:</strong> Grid draw rebalanced. System drawing at peak parameters.`;
        insightEl.style.color = "#27ae60"; 
    }
}

// Hydro Execution
function analyzeWater() {
    const waterInsightEl = document.getElementById("waterInsight");
    if (waterInsightEl) {
        waterInsightEl.innerHTML = EnterpriseTelemetryStream.hydroAnalytics.prescriptiveInsight;
        waterInsightEl.style.color = "#2ecc71";
    }
}

// Workforce Capacity Execution
function analyzeManpower() {
    const manpowerInsightEl = document.getElementById("manpowerInsight");
    if (manpowerInsightEl) {
        manpowerInsightEl.innerHTML = EnterpriseTelemetryStream.workforceAnalytics.prescriptiveInsight;
        manpowerInsightEl.style.color = "#2ecc71";
    }
}
function applyManpowerOptimization() {
    const manpowerInsightEl = document.getElementById("manpowerInsight");
    if (manpowerInsightEl && manpowerChartInstance) {
        // Adjust chart allocation dataset to visually match the target green efficiency bar
        manpowerChartInstance.data.datasets[1].data = EnterpriseTelemetryStream.workforceAnalytics.optimizedAllocation;
        manpowerChartInstance.update();
        
        manpowerInsightEl.innerHTML = `<strong>👷 Human Capital Optimization Complete:</strong> 20 excess resource units cleanly redeployed. Shift Bravo structural load rebalanced.`;
        manpowerInsightEl.style.color = "#27ae60";
    }
}