export enum AnalyzerActionTypes {
    SetResults = 'SET_RESULTS',
    SetAnalyzed = 'SET_IS_ANALYZED',
    SetImage = 'SET_IS_UPLOADED'
}

type SetResults = {
    readonly type: AnalyzerActionTypes.SetResults,
    readonly payload: boolean
}

type SetAnalyzed = {
    readonly type: AnalyzerActionTypes.SetAnalyzed,
    readonly payload: boolean
}

type SetImage = {
    readonly type: AnalyzerActionTypes.SetImage,
    readonly payload: string;
}

export type AnalyzerAction = SetResults | SetAnalyzed | SetImage