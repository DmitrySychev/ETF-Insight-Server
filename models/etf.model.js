const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ETF = new Schema(
    {
        Symbol: { type: String, required: true },
        Name: { type: String, required: true },
        "Asset Class": { type: String, required: true },
        Assets: { type: String, required: true },
        Avg: {},
        Price: { type: String, required: true },
        Inverse: { type: Boolean, required: true },
        Leveraged: { type: Boolean, required: true },
        "Smart Beta": { type: Boolean, required: true },
        "Currency Hedged": { type: Boolean, required: true },
        "1 Week Returns": { type: String, required: true },
        "4 Week Returns": { type: String, required: true },
        "YTD Price Change": { type: String, required: true },
        "1 Year Returns": { type: String, required: true },
        "3 Year Returns": { type: String, required: true },
        "5 Year Returns": { type: String, required: true },
        "1 Week FF": { type: String, required: true },
        "4 Week FF": { type: String, required: true },
        "YTD FF": { type: String, required: true },
        "1 Year FF": { type: String, required: true },
        "3 Year FF": { type: String, required: true },
        "5 Year FF": { type: String, required: true },
        "ETFdb Category": { type: String, required: true },
        "Inception": { type: String, required: true },
        "ER": { type: String, required: true },
        "Annual Dividend Rate": { type: String, required: true },
        "Dividend Date": { type: String, required: true },
        "Dividend": { type: String, required: true },
        "Annual Dividend Yield %": { type: String, required: true },
        "Dividend Frequency": { type: String, required: true },
        "Standard Deviation": { type: String, required: true },
        "P/E Ratio": { type: String, required: true },
        "Beta": { type: String, required: true },
        "5-Day Volatility": { type: String, required: true },
        "20-Day Volatility": { type: String, required: true },
        "50-Day Volatility": { type: String, required: true },
        "200-Day Volatility": { type: String, required: true },
        "Issuer": { type: String, required: true },
        "# of Holdings": { type: String, required: true },
        "% In Top 10": { type: String, required: true },
        "% In Top 15": { type: String, required: true },
        "% In Top 50": { type: String, required: true },
        "ST Cap Gains": { type: String, required: true },
        "LT Cap Gains": { type: String, required: true },
        "Tax Form": { type: String, required: true },
        "Lower Bollinger": { type: String, required: true },
        "Upper Bollinger": { type: String, required: true },
        "Support 1": { type: String, required: true },
        "Resistance 1": { type: String, required: true },
        "RSI": { type: String, required: true },
        "Liquidity": { type: String, required: true },
        "Expenses": { type: String, required: true },
        "Performance": { type: String, required: true },
        "Volatility": { type: String, required: true },
        "ETFdb Pro": { type: String, required: true },
        "Concentration": { type: String, required: true },
        "ESG Score": { type: String, required: true },
        "ESG Score Peer Percentile (%)": { type: String, required: true },
        "ESG Score Global Percentile (%)": { type: String, required: true },
        "Carbon Intensity (Tons of CO2e / $M Sales)": { type: String, required: true },
        "ESG Exclusion Criteria (%)": { type: String, required: true },
        "Sustainable Impact Solutions (%)": { type: String, required: true },
        holdings: [{ 
            ticker: String,
            name: String,
            percentage: Number,
        }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('etfs', ETF)

