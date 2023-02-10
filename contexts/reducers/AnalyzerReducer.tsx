import { AnalyzerAction, AnalyzerActionTypes } from "../actions/AnalyzerAction"
import { AnalyzerState } from "../AnalyzerContext"

export const analyzerReducer = (state: AnalyzerState, action: AnalyzerAction): AnalyzerState => {
    switch (action.type) {
        case AnalyzerActionTypes.SetResults:
            return {
                ...state,
                isWeed: action.payload
            }
        case AnalyzerActionTypes.SetAnalyzed:
            return {
                ...state,
                isAnalyzed: action.payload
            }
        default:
            return {
                ...state
            }
    }
}