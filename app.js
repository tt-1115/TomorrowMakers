/**
 * =========================================================================
 * ECOSPHERE ENTERPRISE SOLUTIONS - CORE CORE ENGINE
 * Hackathon Deployment Matrix
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
        currentUsage: 1420,  // kWh
        currentCost: 3550,   // RM
        optimizedUsage: 1214, // kWh after optimization
        optimizedCost: 3035,  // RM after optimization
        prescriptiveInsight: `<strong>[CRITICAL ANOMALY] Peak Demand Thermal Inefficiency:</strong><br>
                              Energy consumption breached the baseline threshold during peak operational hours (13:00 - 16:00).<br>
                              <strong>Actionable Resolution:</strong> Deploy automated peak-shaving protocols.<br>
                              <strong>Financial Impact:</strong> Projected Cost Reduction of 14.5%.`
    },
    hydroAnalytics: {
        currentUsage: 8900, // Liters
        prescriptiveInsight: `<strong>[SYSTEMIC LEAK WARNING] Uncharacteristic Flow Differential:</strong><br>
                              Volumetric baseline monitoring indicates a 108% flow spike on Thursday without a corresponding increase in operational output.<br>
                              <strong>Actionable Resolution:</strong> Isolate Zone 4 pneumatic sub-valves immediately.`
    }
};

// 2. AUTOMATED INITIALIZATION (Runs immediately when a page loads)
document.addEventListener("DOMContentLoaded", () => {
    // If we are on the main dashboard, we can dynamically populate global metrics
    const scoreEl = document.getElementById("globalScore");
    if (scoreEl) {
        scoreEl.innerText = EnterpriseTelemetryStream.executiveSummary.sustainabilityScore;
    }
});

// =========================================================================
// 3. ELECTRICITY PAGE INTERACTION LOGIC
// =========================================================================
function analyze() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");

    if (usageEl && costEl && insightEl) {
        // Inject premium telemetric numbers into the UI
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.currentCost;
        
        // Inject high-class AI insight narrative
        insightEl.innerHTML = EnterpriseTelemetryStream.energyAnalytics.prescriptiveInsight;
        insightEl.style.color = "#ff3333"; // Accentuate the warning state
    }
}

function apply() {
    const usageEl = document.getElementById("usage");
    const costEl = document.getElementById("cost");
    const insightEl = document.getElementById("insight");

    if (usageEl && costEl && insightEl) {
        // Visually update the values to show real-time reduction simulation
        usageEl.innerText = EnterpriseTelemetryStream.energyAnalytics.optimizedUsage;
        costEl.innerText = EnterpriseTelemetryStream.energyAnalytics.optimizedCost;
        
        // Update insight box to show enterprise success status
        insightEl.innerHTML = `<strong>⚡ Optimization Applied Successfully:</strong><br>
                               Systems calibrated. Power grid draw reduced. Carbon offsets logged in real-time.`;
        insightEl.style.color = "#2ecc71"; // Change to successful enterprise green
    }
}

// =========================================================================
// 4. WATER PAGE INTERACTION LOGIC
// =========================================================================
function analyzeWater() {
    const waterInsightEl = document.getElementById("waterInsight");
    
    if (waterInsightEl) {
        waterInsightEl.innerHTML = EnterpriseTelemetryStream.hydroAnalytics.prescriptiveInsight;
        waterInsightEl.style.color = "#ff3333";
    }
}