import React from 'react';
import { createContext, useContext, useReducer } from "react";
import { IAnalyzer } from "../api/analyzer/analyzer.interface";
import { AnalyzerActionTypes } from "./actions/AnalyzerAction";
import { analyzerReducer } from "./reducers/AnalyzerReducer";

export type AnalyzerState = {
    isWeed: boolean;
    isAnalyzed: boolean;
    image: string;
}

interface IAnalyzerContext {
    analyzerState: AnalyzerState,
    analyzeImageResult: (analyzer: IAnalyzer[]) => void
}

const initialAnalyzerState: IAnalyzerContext = {
    analyzerState: {
        isWeed: false,
        isAnalyzed: false,
        image: ''
    },
    analyzeImageResult: (analyzer: IAnalyzer[]) => { }
}
type Props = { children?: React.ReactNode };
const AnalyzerStore: React.FC<Props> = (props: Props) => {
    const [analyzerState, dispatch] = useReducer(analyzerReducer, initialAnalyzerState.analyzerState);

    const analyzeImageResult = (analyzer: IAnalyzer[]): void => {
        const isWeed = true;
        setupImage(analyzer['images'][0]);
        setResult(isWeed);
        setIsAnalyzed(true);
    }

    const setResult = (isWeed: boolean) => {
        dispatch({
            type: AnalyzerActionTypes.SetResults,
            payload: isWeed
        })
    }

    const setIsAnalyzed = (isAnalyzed: boolean) => {
        dispatch({
            type: AnalyzerActionTypes.SetAnalyzed,
            payload: isAnalyzed
        })
    }

    const setupImage = (image: string) => {
        dispatch({
            type: AnalyzerActionTypes.SetImage,
            payload: image
        })
    }

    return (
        <AnalyzerContext.Provider value={{
            analyzerState,
            analyzeImageResult
        }}>
            {props.children}
        </AnalyzerContext.Provider>
    )
}
export const AnalyzerContext = createContext<IAnalyzerContext>(initialAnalyzerState)
export default AnalyzerStore;

export const useIAnalyzerContext = () => {
    return useContext(AnalyzerContext);
}