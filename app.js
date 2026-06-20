/**
 * =========================================================================
 * ECOSPHERE ENTERPRISE SOLUTIONS - CORE CORE ENGINE
 * Hackathon Deployment Matrix (Fully Integrated with Charts)
 * =========================================================================
 */

// 1. PREMIUM ENTERPRISE TELEMETRY DATA STORAGE
const EnterpriseTelemetryStream = {
    executiveSummary: {
        sustainabilityScore: 84,
        scoreStatus: "Optimal Performance (Tier 2 Compliance)",
        globalCarbonFootprint: "42.8 Metric Tons CO2e",
        operationalCostSavings: "RM 12,450"
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
    }
};

// Global variables to hold chart instances so we can update them later
let electricityChartInstance = null;

// 2. AUTOMATED INITIALIZATION (Runs when pages load)
document.addEventListener("DOMContentLoaded", () => {
    // Populate dashboard score if element exists
    const scoreEl = document.getElementById("globalScore");
    if (scoreEl) { scoreEl.innerText = EnterpriseTelemetryStream.executiveSummary.sustainabilityScore; }

    // Render Electricity Chart if on electricity page
    const elecCanvas = document.getElementById('electricityChart');
    if (elecCanvas) {
        const ctx = elecCanvas.getContext('2d');
        electricityChartInstance = new Chart(ctx, {
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
            options: {
                responsive: true,
                plugins: {
                    // Drew a clean GREEN suggestion line instead of red
                    legend: { labels: { color: '#333' } }
                },
                scales: {
                    y: { grid: { color: 'rgba(46, 204, 113, 0.15)' } } // Subtle green grid hint
                }
            }
        });
    }

    // Render Water Chart if on water page
    const waterCanvas = document.getElementById('waterChart');
    if (waterCanvas) {
        const ctx = waterCanvas.getContext('2d');
        new Chart(ctx, {
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
});

// =========================================================================
// 3. INTERACTION CONTROL TRIGGERS
// =========================================================================
function analyze() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");

    if (usageEl && costEl && insightEl) {
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentCost;
        insightEl.innerHTML = EnterpriseTelemetryStream.energyAnalytics.prescriptiveInsight;
        
        // CHANGED: Prompt line text status color changed from red to elegant enterprise green
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
        insightEl.innerHTML = `<strong>⚡ Optimization Protocols Implemented:</strong><br>
                               Grid draw rebalanced to green status lines. Systems operating at peak efficiency levels.`;
        insightEl.style.color = "#27ae60"; 
    }
}

function analyzeWater() {
    const waterInsightEl = document.getElementById("waterInsight");
    if (waterInsightEl) {
        waterInsightEl.innerHTML = EnterpriseTelemetryStream.hydroAnalytics.prescriptiveInsight;
        waterInsightEl.style.color = "#2ecc71"; // Changed color to clean green
    }
}